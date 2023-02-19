import { Identifier, Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class AttributeCondition extends BaseEntityAction {
    public attribute!: Identifier;
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:attribute";
    }

    

    setAttribute(value: Identifier) {
        this.attribute = value;
            
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