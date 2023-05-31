import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class PowerTypeCondition extends BaseEntityAction {
    private power_type!: Identifier;


    constructor() {
        super()
        this.type = "origins:power_type";
    }

    

    setPowerType(value: Identifier) {
        this.power_type = value;
            
        return this;
    }
}