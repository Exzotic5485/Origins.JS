import { Comparison } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class AmountCondition extends BaseItemCondition {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:amount";
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