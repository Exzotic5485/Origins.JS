import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class ExposedToSunCondition extends BaseEntityAction {


    constructor() {
        super()
        this.type = "origins:exposed_to_sun";
    }

    
}