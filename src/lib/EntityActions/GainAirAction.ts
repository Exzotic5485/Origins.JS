import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class GainAirAction extends BaseEntityAction {
    public value!: number;


    constructor() {
        super()
        this.type = "origins:gain_air";
    }

    

    setValue(value: number) {
        this.value = value;
            
        return this;
    }
}