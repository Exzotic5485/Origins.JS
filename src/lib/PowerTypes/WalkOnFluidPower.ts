import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class WalkOnFluidPower extends BasePower {
    private fluid!: Identifier;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:walk_on_fluid";
    }

    

    setFluid(value: Identifier) {
        this.fluid = value;
            
        return this;
    }
}