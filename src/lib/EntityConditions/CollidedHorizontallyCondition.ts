import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class CollidedHorizontallyCondition extends BaseEntityAction {


    constructor() {
        super()
        this.type = "origins:collided_horizontally";
    }

    
}