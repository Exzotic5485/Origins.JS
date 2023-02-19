import {  } from "../Types";
import BaseItemAction from "./BaseItemAction";

export default class ConsumeAction extends BaseItemAction {
    public amount: number = 1;


    constructor() {
        super()
        this.type = "origins:consume";
    }

    

    setAmount(value: number) {
        this.amount = value;
            
        return this;
    }
}