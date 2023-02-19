import { Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class CommandCondition extends BaseEntityAction {
    public command!: string;
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:command";
    }

    

    setCommand(value: string) {
        this.command = value;
            
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