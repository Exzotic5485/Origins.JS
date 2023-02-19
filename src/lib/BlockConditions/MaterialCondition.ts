import {  } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class MaterialCondition extends BaseBlockAction {
    public material?: string;
    public materials?: string[];


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