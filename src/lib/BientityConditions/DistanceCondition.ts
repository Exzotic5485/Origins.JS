import { Comparison } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class DistanceCondition extends BaseBientityCondition {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:distance";
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