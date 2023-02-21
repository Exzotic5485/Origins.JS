import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class ExhaustPower extends BasePower {
    public interval: number = 20;
    public exhaustion!: number;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:exhaust";
    }

    

    setInterval(value: number) {
        this.interval = value;
            
        return this;
    }

    setExhaustion(value: number) {
        this.exhaustion = value;
            
        return this;
    }
}