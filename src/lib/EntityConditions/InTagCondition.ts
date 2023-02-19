import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class InTagCondition extends BaseEntityAction {
    public tag!: Identifier;


    constructor() {
        super()
        this.type = "origins:in_tag";
    }

    

    setTag(value: Identifier) {
        this.tag = value;
            
        return this;
    }
}