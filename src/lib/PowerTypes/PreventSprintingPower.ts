import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class PreventSprintingPower extends BasePower {


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:prevent_sprinting";
    }

    
}