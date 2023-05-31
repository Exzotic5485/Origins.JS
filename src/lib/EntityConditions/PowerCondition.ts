import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class PowerCondition extends BaseEntityAction {
    private power!: Identifier;
    private source?: Identifier;


    constructor() {
        super()
        this.type = "origins:power";
    }

    

    setPower(value: Identifier) {
        this.power = value;
            
        return this;
    }

    setSource(value: Identifier) {
        this.source = value;
            
        return this;
    }
}