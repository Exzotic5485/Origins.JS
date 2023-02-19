import {  } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class IsEquippableCondition extends BaseItemCondition {


    constructor() {
        super()
        this.type = "origins:is_equippable";
    }

    
}