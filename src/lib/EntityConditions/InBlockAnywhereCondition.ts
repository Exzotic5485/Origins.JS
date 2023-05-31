import { BlockConditionType, Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class InBlockAnywhereCondition extends BaseEntityAction {
    private block_condition!: BlockConditionType;
    private comparison: Comparison = ">=";
    private compare_to: number = 1;


    constructor() {
        super()
        this.type = "origins:in_block_anywhere";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
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