import { PowerOptions, BientityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventEntityCollisionPower extends BasePower {
    public bientity_condition?: BientityConditionType;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:prevent_entity_collision";
    }

    

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }
}