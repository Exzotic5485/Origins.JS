import { PowerOptions, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventElytraFlightPower extends BasePower {
    public entity_action?: EntityActionType;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:prevent_elytra_flight";
    }

    

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }
}