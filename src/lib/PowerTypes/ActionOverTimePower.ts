import { PowerOptions, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ActionOverTimePower extends BasePower {
    private interval: number = 20;
    private entity_action?: EntityActionType;
    private rising_action?: EntityActionType;
    private falling_action?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_over_time";
    }

    

    setInterval(value: number) {
        this.interval = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }

    setRisingAction(value: EntityActionType) {
        this.rising_action = value;
            
        return this;
    }

    setFallingAction(value: EntityActionType) {
        this.falling_action = value;
            
        return this;
    }
}