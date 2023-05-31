import { Comparison } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class SlipperinessCondition extends BaseBlockAction {
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:slipperiness";
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