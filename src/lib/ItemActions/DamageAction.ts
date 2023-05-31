import {  } from "../Types";
import BaseItemAction from "./BaseItemAction";

export default class DamageAction extends BaseItemAction {
    private amount: number = 1;
    private ignore_unbreaking: boolean = false;


    constructor() {
        super()
        this.type = "origins:damage";
    }

    

    setAmount(value: number) {
        this.amount = value;
            
        return this;
    }

    setIgnoreUnbreaking(value: boolean) {
        this.ignore_unbreaking = value;
            
        return this;
    }
}