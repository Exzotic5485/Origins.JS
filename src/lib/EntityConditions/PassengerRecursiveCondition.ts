import { BientityConditionType, Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class PassengerRecursiveCondition extends BaseEntityAction {
    private bientity_condition?: BientityConditionType;
    private comparison: Comparison = ">=";
    private compare_to: number = 1;


    constructor() {
        super()
        this.type = "origins:passenger_recursive";
    }

    

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setComparison(value: Comparison) {
        this.comparison = value;
            
        return this;
    }

    setCompareTo(value: number) {
        this.compare_to = value;
            
        return this;
    }
}