import { DamageSource } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class DamageAction extends BaseEntityAction {
    private amount!: number;
    private source!: DamageSource;

    constructor() {
        super();
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
