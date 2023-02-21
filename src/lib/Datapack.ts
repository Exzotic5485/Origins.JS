import Origin from "./Origin";
import { Identifier } from "./Types";
import AdmZip from 'adm-zip';
import { createUniqueName } from "./utils/UniqueFilename";

type BuildOptions = {
    version?: number;
    layer?: Identifier;
};

export default class Datapack {
    public static namespace: string;

    private origins: Origin[] = [];

    constructor(namespace: string) {
        Datapack.namespace = namespace;
    }

    addOrigin(...params: Origin[]) {
        this.origins.push(...params);
    }

    async build(outputFile: string, options?: BuildOptions) {
        const mcmetaVersion = options?.version || 10;
        const originLayerIdentifier = options?.layer || "origins:origin";

        const zip = new AdmZip();
        
        const path = 'data/' + Datapack.namespace;

        const originLayer = {
            replace: false,
            origins: []
        }

        for (const origin of this.origins) {
            const powers: Identifier[] = [];

            for (const power of origin.powers) {
                const powerFile = JSON.stringify(power, null, 4);

                zip.addFile(`${path}/powers/${power.getFileName()}.json`, Buffer.from(powerFile))

                powers.push(power.getReference() as Identifier)
            }

            const originJson = { ...JSON.parse(JSON.stringify(origin)), powers }

            zip.addFile(`${path}/origins/${createUniqueName(Datapack.namespace, origin.name)}.json`, Buffer.from(JSON.stringify(originJson, null, 4)))
        }

        const layerSeperated = originLayerIdentifier.split(`:`);

        zip.addFile(`data/${layerSeperated[0]}/origin_layers/${layerSeperated[1]}.json`, Buffer.from(JSON.stringify(originLayer, null, 4)))

        const mcmeta = `{
            "pack": {
              "pack_format": ${mcmetaVersion}
            }
        }`

        zip.addFile(`pack.mcmeta`, Buffer.from(mcmeta))

        zip.writeZip(outputFile)
    }
}
