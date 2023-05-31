import { Comparison } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class RelativeDurabilityCondition extends BaseItemCondition {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:relative_durability";
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