import Datapack from "./Datapack";
import { Identifier, MinecraftFunctionType } from "./Types";

let i = 0;

export default class MinecraftFunction {
    public contents: string;
    public fileName: string;
    public type: MinecraftFunctionType = MinecraftFunctionType.Normal;

    constructor(contents: string, type: MinecraftFunctionType, fileName?: string) {
        this.contents = contents;
        this.type = type;
        this.fileName = fileName || `function${i++}`;
    }

    getReference() {
        return `${Datapack.namespace}:${this.fileName}`;
    }
}