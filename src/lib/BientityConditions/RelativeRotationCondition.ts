import { Comparison } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class RelativeRotationCondition extends BaseBientityCondition {
    private axes: string[] = ["x", "y", "z"];
    private actor_rotation: string = "head";
    private target_rotation: string = "body";
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:relative_rotation";
    }

    

    setAxes(value: string[]) {
        this.axes = value;
            
        return this;
    }

    setActorRotation(value: string) {
        this.actor_rotation = value;
            
        return this;
    }

    setTargetRotation(value: string) {
        this.target_rotation = value;
            
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