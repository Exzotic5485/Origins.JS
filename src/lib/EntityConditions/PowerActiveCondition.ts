import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class PowerActiveCondition extends BaseEntityAction {
    public power!: Identifier;


    constructor() {
        super()
        this.type = "origins:power_active";
    }

    

    setPower(value: Identifier) {
        this.power = value;
            
        return this;
    }
}