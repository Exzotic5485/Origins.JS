import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class AdvancementCondition extends BaseEntityAction {
    public advancement!: Identifier;


    constructor() {
        super()
        this.type = "origins:advancement";
    }

    

    setAdvancement(value: Identifier) {
        this.advancement = value;
            
        return this;
    }
}