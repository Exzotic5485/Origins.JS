import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class FreezePower extends BasePower {


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:freeze";
    }

    
}