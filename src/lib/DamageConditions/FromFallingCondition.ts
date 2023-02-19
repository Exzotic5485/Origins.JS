import {  } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class FromFallingCondition extends BaseDamageCondition {


    constructor() {
        super()
        this.type = "origins:from_falling";
    }

    
}