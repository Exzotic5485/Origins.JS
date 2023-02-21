import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class DisableRegenPower extends BasePower {


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:disable_regen";
    }

    
}