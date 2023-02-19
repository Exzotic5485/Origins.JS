import { Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class XpPointsCondition extends BaseEntityAction {
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:xp_points";
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