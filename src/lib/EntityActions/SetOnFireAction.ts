import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class SetOnFireAction extends BaseEntityAction {
    private duration!: number;


    constructor() {
        super()
        this.type = "origins:set_on_fire";
    }

    

    setDuration(value: number) {
        this.duration = value;
            
        return this;
    }
}