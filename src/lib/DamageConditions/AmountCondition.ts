import { Comparison } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class AmountCondition extends BaseDamageCondition {
    public comparison!: Comparison;
    public compare_to!: number;


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