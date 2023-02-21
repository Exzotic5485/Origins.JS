import { PowerOptions, EntityConditionType, BientityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventEntityRenderPower extends BasePower {
    public entity_condition?: EntityConditionType;
    public bientity_condition?: BientityConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:prevent_entity_render";
    }

    

    setEntityCondition(value: EntityConditionType) {
        this.entity_condition = value;
            
        return this;
    }

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }
}