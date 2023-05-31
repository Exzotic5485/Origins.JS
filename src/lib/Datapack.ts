import Origin from "./Origin";
import { Identifier, MinecraftFunctionType } from "./Types";
import AdmZip from "adm-zip";
import { createUniqueName } from "./utils/createUniqueName";
import { existsSync, writeFileSync } from "fs";
import { mkdir } from "fs/promises";
import MinecraftFunction from "./Function";

type BuildOptions = {
    version?: number;
    layer?: Identifier;
};

export default class Datapack {
    public static namespace: string;

    private origins: Origin[] = [];
    private mcFunctions: MinecraftFunction[] = [];

    constructor(namespace: string) {
        Datapack.namespace = namespace;
    }

    addOrigin(...params: Origin[]) {
        this.origins.push(...params);

        return this;
    }

    importMcFunction(functionContents: string, type: MinecraftFunctionType, name?: string) {
        const mcFunction = new MinecraftFunction(functionContents, type, name);

        this.mcFunctions.push(mcFunction);

        return mcFunction;
    }

    async build(outputFile: string, options?: BuildOptions) {
        const mcmetaVersion = options?.version || 10;
        const originLayerIdentifier = options?.layer || "origins:origin";

        const zip = new AdmZip();

        const path = "data/" + Datapack.namespace;

        const originLayer = {
            replace: false,
            origins: [] as string[],
        };

        for (const origin of this.origins) {
            const powers: Identifier[] = [ ...origin.powerReferences ];

            for (const power of origin.powers) {
                const powerFile = JSON.stringify(power, null, 4);

                zip.addFile(`${path}/powers/${power.getFileName()}.json`, Buffer.from(powerFile));

                powers.push(power.getReference() as Identifier);
            }

            const originJson = { ...JSON.parse(JSON.stringify(origin)), powers };
            const originFileName = createUniqueName(Datapack.namespace, origin.name);

            zip.addFile(`${path}/origins/${originFileName}.json`, Buffer.from(JSON.stringify(originJson, null, 4)));

            originLayer.origins.push(`${Datapack.namespace}:${originFileName}`);
        }

        const layerSeperated = originLayerIdentifier.split(`:`);

        zip.addFile(`data/${layerSeperated[0]}/origin_layers/${layerSeperated[1]}.json`, Buffer.from(JSON.stringify(originLayer, null, 4)));

        const loadFunctions: string[] = [];
        const tickFunctions: string[] = [];

        this.mcFunctions.forEach((mcFunc) => {
            zip.addFile(`${path}/functions/${mcFunc.fileName}.mcfunction`, Buffer.from(mcFunc.contents));

            if (mcFunc.type == MinecraftFunctionType.Load) loadFunctions.push(mcFunc.getReference());
            else if (mcFunc.type == MinecraftFunctionType.Tick) tickFunctions.push(mcFunc.getReference());
        });

        if (loadFunctions.length > 0) {
            const file = {
                values: loadFunctions,
                replace: false,
            };

            zip.addFile(`data/minecraft/tags/functions/load.json`, Buffer.from(JSON.stringify(file, null, 4)));
        }

        if (tickFunctions.length > 0) {
            const file = {
                values: tickFunctions,
                replace: false,
            };

            zip.addFile(`data/minecraft/tags/functions/tick.json`, Buffer.from(JSON.stringify(file, null, 4)));
        }

        const mcmeta = `{
            "pack": {
              "pack_format": ${mcmetaVersion}
            }
        }`;

        zip.addFile(`pack.mcmeta`, Buffer.from(mcmeta));

        zip.writeZip(outputFile);
    }

    async buildDev(outputFolder: string, options?: BuildOptions) {
        const mcmetaVersion = options?.version || 10;
        const originLayerIdentifier = options?.layer || "origins:origin";

        const layerSeperated = originLayerIdentifier.split(`:`);

        const path = `${outputFolder}/data/` + Datapack.namespace;
        const minecraftFunctionsPath = outputFolder + "/data/minecraft/tags/functions"

        const originLayer = {
            replace: false,
            origins: [] as string[],
        };

        if (!existsSync(outputFolder)) throw new Error("Output directory does not exist!");

        // await mkdir(outputFolder, { recursive: true })
        await mkdir(path, { recursive: true }).catch((e) => {});
        await mkdir(path + `/powers`).catch((e) => {});
        await mkdir(path + `/origins`).catch((e) => {});
        await mkdir(path + "/functions").catch((e) => {});
        await mkdir(`${outputFolder}/data/${layerSeperated[0]}/origin_layers/`, { recursive: true }).catch((e) => {});
        await mkdir(minecraftFunctionsPath, { recursive: true }).catch((e) => {});

        for (const origin of this.origins) {
            const powers: Identifier[] = [ ...origin.powerReferences ];

            for (const power of origin.powers) {
                const powerFile = JSON.stringify(power, null, 4);

                writeFileSync(`${path}/powers/${power.getFileName()}.json`, powerFile);

                powers.push(power.getReference() as Identifier);
            }

            const originJson = { ...JSON.parse(JSON.stringify(origin)), powers };
            const originFileName = createUniqueName(Datapack.namespace, origin.name);

            writeFileSync(`${path}/origins/${originFileName}.json`, JSON.stringify(originJson, null, 4));
            originLayer.origins.push(`${Datapack.namespace}:${originFileName}`);
        }

        writeFileSync(`${outputFolder}/data/${layerSeperated[0]}/origin_layers/${layerSeperated[1]}.json`, JSON.stringify(originLayer, null, 4));

        const loadFunctions: string[] = [];
        const tickFunctions: string[] = [];

        this.mcFunctions.forEach((mcFunc) => {
            writeFileSync(`${path}/functions/${mcFunc.fileName}.mcfunction`, mcFunc.contents);

            if (mcFunc.type == MinecraftFunctionType.Load) loadFunctions.push(mcFunc.getReference());
            else if (mcFunc.type == MinecraftFunctionType.Tick) tickFunctions.push(mcFunc.getReference());
        });

        if (loadFunctions.length > 0) {
            const file = {
                values: loadFunctions,
                replace: false,
            };

            writeFileSync(`${minecraftFunctionsPath}/load.json`, JSON.stringify(file, null, 4));
        }

        if (tickFunctions.length > 0) {
            const file = {
                values: tickFunctions,
                replace: false,
            };

            writeFileSync(`${minecraftFunctionsPath}/tick.json`, JSON.stringify(file, null, 4));
        }

        const mcmeta = `{
            "pack": {
              "pack_format": ${mcmetaVersion},
              "description": "A minecraft origins datapack written with origins js!"
            }
        }`;

        writeFileSync(`${outputFolder}/pack.mcmeta`, mcmeta);
    }
}
