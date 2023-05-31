import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class ExhaustPower extends BasePower {
    private interval: number = 20;
    private exhaustion!: number;


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