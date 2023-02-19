import {  } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class IsDamageableCondition extends BaseItemCondition {


    constructor() {
        super()
        this.type = "origins:is_damageable";
    }

    
}