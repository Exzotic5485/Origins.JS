import { Identifier } from "../Types";
import BaseBiomeCondition from "./BaseBiomeCondition";

export default class InTagCondition extends BaseBiomeCondition {
    private tag!: Identifier;


    constructor() {
        super()
        this.type = "origins:in_tag";
    }

    

    setTag(value: Identifier) {
        this.tag = value;
            
        return this;
    }
}