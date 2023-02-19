import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class BurnPower extends BasePower {
    public interval!: number;
    public burn_duration!: number;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:burn";
    }

    

    setInterval(value: number) {
        this.interval = value;
            
        return this;
    }

    setBurnDuration(value: number) {
        this.burn_duration = value;
            
        return this;
    }
}