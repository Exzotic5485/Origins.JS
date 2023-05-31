import { Comparison } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class ArmorValueCondition extends BaseItemCondition {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:armor_value";
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