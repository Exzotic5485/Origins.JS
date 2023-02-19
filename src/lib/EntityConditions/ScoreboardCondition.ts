import { Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class ScoreboardCondition extends BaseEntityAction {
    public name?: string;
    public objective!: string;
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:scoreboard";
    }

    

    setName(value: string) {
        this.name = value;
            
        return this;
    }

    setObjective(value: string) {
        this.objective = value;
            
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