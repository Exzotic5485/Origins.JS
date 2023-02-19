import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class IgnoreWaterPower extends BasePower {


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:ignore_water";
    }

    
}