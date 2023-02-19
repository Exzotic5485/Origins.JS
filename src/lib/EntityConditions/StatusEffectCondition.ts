import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class StatusEffectCondition extends BaseEntityAction {
    public effect!: Identifier;
    public min_amplifier: number = 0;
    public max_amplifier: number = 2147483647;
    public min_duration: number = 0;
    public max_duration: number = 2147483647;


    constructor() {
        super()
        this.type = "origins:status_effect";
    }

    

    setEffect(value: Identifier) {
        this.effect = value;
            
        return this;
    }

    setMinAmplifier(value: number) {
        this.min_amplifier = value;
            
        return this;
    }

    setMaxAmplifier(value: number) {
        this.max_amplifier = value;
            
        return this;
    }

    setMinDuration(value: number) {
        this.min_duration = value;
            
        return this;
    }

    setMaxDuration(value: number) {
        this.max_duration = value;
            
        return this;
    }
}