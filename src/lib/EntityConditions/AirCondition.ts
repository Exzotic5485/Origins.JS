import { Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class AirCondition extends BaseEntityAction {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:air";
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