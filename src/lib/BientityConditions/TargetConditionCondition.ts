import { EntityConditionType } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class TargetConditionCondition extends BaseBientityCondition {
    private condition!: EntityConditionType;


    constructor() {
        super()
        this.type = "origins:target_condition";
    }

    

    setCondition(value: EntityConditionType) {
        this.condition = value;
            
        return this;
    }
}