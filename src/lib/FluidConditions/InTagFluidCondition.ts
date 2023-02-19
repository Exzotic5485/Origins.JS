import { Identifier } from "../Types";
import EmptyFluidCondition from "./EmptyFluidCondition";

export default class InTagFluidCondition extends EmptyFluidCondition {
    tag!: Identifier;

    constructor() {
        super()
        
        this.type = "origins:in_tag";
    }

    setTag(value: Identifier) {
        this.tag = value;
            
        return this;
    }
}