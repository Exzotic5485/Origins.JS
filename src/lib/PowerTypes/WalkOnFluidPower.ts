import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class WalkOnFluidPower extends BasePower {
    public fluid!: Identifier;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:walk_on_fluid";
    }

    

    setFluid(value: Identifier) {
        this.fluid = value;
            
        return this;
    }
}