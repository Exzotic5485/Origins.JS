import { Comparison } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class LightLevelCondition extends BaseBlockAction {
    public light_type?: string;
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:light_level";
    }

    

    setLightType(value: string) {
        this.light_type = value;
            
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