import { FluidConditionType } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class FluidCondition extends BaseBlockAction {
    private fluid_condition!: FluidConditionType;


    constructor() {
        super()
        this.type = "origins:fluid";
    }

    

    setFluidCondition(value: FluidConditionType) {
        this.fluid_condition = value;
            
        return this;
    }
}