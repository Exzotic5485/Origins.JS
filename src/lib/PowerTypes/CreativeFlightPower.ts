import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class CreativeFlightPower extends BasePower {


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:creative_flight";
    }

    
}