import {  } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class OutOfWorldCondition extends BaseDamageCondition {


    constructor() {
        super()
        this.type = "origins:out_of_world";
    }

    
}