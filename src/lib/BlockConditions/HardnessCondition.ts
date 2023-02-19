import { Comparison } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class HardnessCondition extends BaseBlockAction {
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:hardness";
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