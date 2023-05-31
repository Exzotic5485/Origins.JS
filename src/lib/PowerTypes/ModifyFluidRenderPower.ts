import { PowerOptions, BlockConditionType, FluidConditionType, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class ModifyFluidRenderPower extends BasePower {
    private block_condition?: BlockConditionType;
    private fluid_condition?: FluidConditionType;
    private fluid!: Identifier;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_fluid_render";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setFluidCondition(value: FluidConditionType) {
        this.fluid_condition = value;
            
        return this;
    }

    setFluid(value: Identifier) {
        this.fluid = value;
            
        return this;
    }
}