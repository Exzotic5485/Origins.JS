import { BientityActionType, BientityConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class AreaOfEffectAction extends BaseEntityAction {
    public radius: number = 16.0;
    public bientity_action!: BientityActionType;
    public bientity_condition?: BientityConditionType;
    public include_target: boolean = false;


    constructor() {
        super()
        this.type = "origins:area_of_effect";
    }

    

    setRadius(value: number) {
        this.radius = value;
            
        return this;
    }

    setBientityAction(value: BientityActionType) {
        this.bientity_action = value;
            
        return this;
    }

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setIncludeTarget(value: boolean) {
        this.include_target = value;
            
        return this;
    }
}