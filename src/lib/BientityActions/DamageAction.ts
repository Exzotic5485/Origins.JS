import { DamageSource } from "../Types";
import BaseBientityAction from "./BaseBientityAction";

export default class DamageAction extends BaseBientityAction {
    private amount!: number;
    private source!: DamageSource;


    constructor() {
        super()
        this.type = "origins:damage";
    }

    

    setAmount(value: number) {
        this.amount = value;
            
        return this;
    }

    setSource(value: DamageSource) {
        this.source = value;
            
        return this;
    }
}