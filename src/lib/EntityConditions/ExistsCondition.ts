import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class ExistsCondition extends BaseEntityAction {


    constructor() {
        super()
        this.type = "origins:exists";
    }

    
}