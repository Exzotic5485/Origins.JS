import {  } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class ExplosiveCondition extends BaseDamageCondition {


    constructor() {
        super()
        this.type = "origins:explosive";
    }

    
}