import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class SubmergedInCondition extends BaseEntityAction {
    private fluid!: Identifier;


    constructor() {
        super()
        this.type = "origins:submerged_in";
    }

    

    setFluid(value: Identifier) {
        this.fluid = value;
            
        return this;
    }
}