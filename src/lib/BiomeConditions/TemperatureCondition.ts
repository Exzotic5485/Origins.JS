import { Comparison } from "../Types";
import BaseBiomeCondition from "./BaseBiomeCondition";

export default class TemperatureCondition extends BaseBiomeCondition {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:temperature";
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