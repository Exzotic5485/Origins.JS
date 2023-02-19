import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class HealAction extends BaseEntityAction {
    public amount!: number;


    constructor() {
        super()
        this.type = "origins:heal";
    }

    

    setAmount(value: number) {
        this.amount = value;
            
        return this;
    }
}