import { PowerOptions, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ActionOnLandPower extends BasePower {
    private entity_action!: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_on_land";
    }

    

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }
}