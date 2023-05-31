import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class TriggerCooldownAction extends BaseEntityAction {
    private power!: Identifier;


    constructor() {
        super()
        this.type = "origins:trigger_cooldown";
    }

    

    setPower(value: Identifier) {
        this.power = value;
            
        return this;
    }
}