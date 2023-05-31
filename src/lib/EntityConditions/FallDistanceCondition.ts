import { Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class FallDistanceCondition extends BaseEntityAction {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:fall_distance";
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