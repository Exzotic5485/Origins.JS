import { BientityConditionType, Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class PassengerCondition extends BaseEntityAction {
    public bientity_condition?: BientityConditionType;
    public comparison: Comparison = ">=";
    public compare_to: number = 1;


    constructor() {
        super()
        this.type = "origins:passenger";
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