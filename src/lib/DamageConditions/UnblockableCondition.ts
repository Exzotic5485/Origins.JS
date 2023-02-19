import {  } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class UnblockableCondition extends BaseDamageCondition {


    constructor() {
        super()
        this.type = "origins:unblockable";
    }

    
}