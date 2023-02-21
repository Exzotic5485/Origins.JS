import { PowerOptions, DamageConditionType, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventDeathPower extends BasePower {
    public damage_condition?: DamageConditionType;
    public entity_action?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:prevent_death";
    }

    

    setDamageCondition(value: DamageConditionType) {
        this.damage_condition = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }
}