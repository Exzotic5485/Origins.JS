import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class FireImmunityPower extends BasePower {


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:fire_immunity";
    }

    
}