import Origin from "./Origin";
import { Identifier } from "./Types";
import AdmZip from 'adm-zip';
import { createUniqueName } from "./utils/createUniqueName";
import { existsSync, writeFileSync } from "fs";
import { mkdir } from "fs/promises";

type BuildOptions = {
    version?: number;
    layer?: Identifier;
};

let i = 0;

export default class Datapack {
    private static namespace: string;

    private origins: Origin[] = [];
    private mcFunctions: Map<string, string> = new Map();

    constructor(namespace: string) {
        Datapack.namespace = namespace;
    }

    addOrigin(...params: Origin[]) {
        this.origins.push(...params);

        return this;
    }

    importMcFunction(functionContents: string, name?: string) {
        this.mcFunctions.set(name || `function${i++}`, functionContents)

        return this;
    }

    async build(outputFile: string, options?: BuildOptions) {
        const mcmetaVersion = options?.version || 10;
        const originLayerIdentifier = options?.layer || "origins:origin";

        const zip = new AdmZip();
        
        const path = 'data/' + Datapack.namespace;

        const originLayer = {
            replace: false,
            origins: [] as string[]
        }

        for (const origin of this.origins) {
            const powers: Identifier[] = [];

            for (const power of origin.powers) {
                const powerFile = JSON.stringify(power, null, 4);

                zip.addFile(`${path}/powers/${power.getFileName()}.json`, Buffer.from(powerFile))

                powers.push(power.getReference() as Identifier)
            }

            const originJson = { ...JSON.parse(JSON.stringify(origin)), powers }
            const originFileName = createUniqueName(Datapack.namespace, origin.name)

            zip.addFile(`${path}/origins/${originFileName}.json`, Buffer.from(JSON.stringify(originJson, null, 4)))

            originLayer.origins.push(`${Datapack.namespace}:${originFileName}`)
        }

        const layerSeperated = originLayerIdentifier.split(`:`);

        zip.addFile(`data/${layerSeperated[0]}/origin_layers/${layerSeperated[1]}.json`, Buffer.from(JSON.stringify(originLayer, null, 4)))

        this.mcFunctions.forEach((value, key) => {
            zip.addFile(`${path}/functions/${key}.mcfunction`, Buffer.from(value))
        })

        const mcmeta = `{
            "pack": {
              "pack_format": ${mcmetaVersion}
            }
        }`

        zip.addFile(`pack.mcmeta`, Buffer.from(mcmeta))

        zip.writeZip(outputFile)
    }

    async buildDev(outputFolder: string, options?: BuildOptions) {
        const mcmetaVersion = options?.version || 10;
        const originLayerIdentifier = options?.layer || "origins:origin";

        const layerSeperated = originLayerIdentifier.split(`:`);
        
        const path = `${outputFolder}/data/` + Datapack.namespace;

        const originLayer = {
            replace: false,
            origins: [] as string[]
        }

        if(!existsSync(outputFolder)) throw new Error('Output directory does not exist!')

        // await mkdir(outputFolder, { recursive: true })
        await mkdir(path, { recursive: true }).catch(e => {})
        await mkdir(path + `/powers`).catch(e => {})
        await mkdir(path + `/origins`).catch(e => {})
        await mkdir(path + '/functions').catch(e => {})
        await mkdir(`${outputFolder}/data/${layerSeperated[0]}/origin_layers/`, { recursive: true }).catch(e => {})

        for (const origin of this.origins) {
            const powers: Identifier[] = [];

            for (const power of origin.powers) {
                const powerFile = JSON.stringify(power, null, 4);

                writeFileSync(`${path}/powers/${power.getFileName()}.json`, powerFile)

                powers.push(power.getReference() as Identifier)
            }

            const originJson = { ...JSON.parse(JSON.stringify(origin)), powers }
            const originFileName = createUniqueName(Datapack.namespace, origin.name)

            writeFileSync(`${path}/origins/${originFileName}.json`, JSON.stringify(originJson, null, 4))
            originLayer.origins.push(`${Datapack.namespace}:${originFileName}`)
        }

        writeFileSync(`${outputFolder}/data/${layerSeperated[0]}/origin_layers/${layerSeperated[1]}.json`, JSON.stringify(originLayer, null, 4))

        this.mcFunctions.forEach((value, key) => {
            writeFileSync(`${path}/functions/${key}.mcfunction`, value)
        })

        const mcmeta = `{
            "pack": {
              "pack_format": ${mcmetaVersion},
              "description": "A minecraft origins datapack written with origins js!"
            }
        }`

        writeFileSync(`${outputFolder}/pack.mcmeta`, mcmeta)
    }
}
