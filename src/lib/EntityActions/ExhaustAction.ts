import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ExhaustAction extends BaseEntityAction {
    public amount!: number;


    constructor() {
        super()
        this.type = "origins:exhaust";
    }

    

    setAmount(value: number) {
        this.amount = value;
            
        return this;
    }
}