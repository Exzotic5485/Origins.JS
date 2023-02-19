import { BlockConditionType, Comparison } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class AdjacentCondition extends BaseBlockAction {
    public adjacent_condition!: BlockConditionType;
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:adjacent";
    }

    

    setAdjacentCondition(value: BlockConditionType) {
        this.adjacent_condition = value;
            
        return this;
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