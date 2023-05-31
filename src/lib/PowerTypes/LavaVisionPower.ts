import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class LavaVisionPower extends BasePower {
    private s!: number;
    private v!: number;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:lava_vision";
    }

    

    setS(value: number) {
        this.s = value;
            
        return this;
    }

    setV(value: number) {
        this.v = value;
            
        return this;
    }
}