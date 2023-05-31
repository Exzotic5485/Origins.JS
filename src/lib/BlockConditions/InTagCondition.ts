import { Identifier } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class InTagCondition extends BaseBlockAction {
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