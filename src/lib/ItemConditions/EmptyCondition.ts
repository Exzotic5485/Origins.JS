import {  } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class EmptyCondition extends BaseItemCondition {


    constructor() {
        super()
        this.type = "origins:empty";
    }

    
}