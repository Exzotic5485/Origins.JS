import {  } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class BypassesArmorCondition extends BaseDamageCondition {


    constructor() {
        super()
        this.type = "origins:bypasses_armor";
    }

    
}