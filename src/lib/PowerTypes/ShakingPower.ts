import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class ShakingPower extends BasePower {


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:shaking";
    }

    
}