import {  } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class MovementBlockingCondition extends BaseBlockAction {


    constructor() {
        super()
        this.type = "origins:movement_blocking";
    }

    
}