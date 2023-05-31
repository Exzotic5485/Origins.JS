import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class NightVisionPower extends BasePower {
    private strength: number = 1.0;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:night_vision";
    }

    

    setStrength(value: number) {
        this.strength = value;
            
        return this;
    }
}