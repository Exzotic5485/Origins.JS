import { Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class SaturationLevelCondition extends BaseEntityAction {
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:saturation_level";
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