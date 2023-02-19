import {  } from "../Types";
import BaseItemAction from "./BaseItemAction";

export default class DamageAction extends BaseItemAction {
    public amount: number = 1;
    public ignore_unbreaking: boolean = false;


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