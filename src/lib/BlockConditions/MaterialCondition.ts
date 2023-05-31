import {  } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class MaterialCondition extends BaseBlockAction {
    private material?: string;
    private materials?: string[];


    constructor() {
        super()
        this.type = "origins:material";
    }

    

    setMaterial(value: string) {
        this.material = value;
            
        return this;
    }

    setMaterials(value: string[]) {
        this.materials = value;
            
        return this;
    }
}