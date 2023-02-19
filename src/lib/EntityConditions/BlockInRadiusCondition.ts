import { BlockConditionType, Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class BlockInRadiusCondition extends BaseEntityAction {
    public block_condition!: BlockConditionType;
    public radius!: number;
    public shape: string = "cube";
    public comparison: Comparison = ">=";
    public compare_to: number = 1;


    constructor() {
        super()
        this.type = "origins:block_in_radius";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setRadius(value: number) {
        this.radius = value;
            
        return this;
    }

    setShape(value: string) {
        this.shape = value;
            
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