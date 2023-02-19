import { ShapeType, FluidHandling } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class CanSeeCondition extends BaseBientityCondition {
    public shape_type: ShapeType = "visual";
    public fluid_handling: FluidHandling = "none";


    constructor() {
        super()
        this.type = "origins:can_see";
    }

    

    setShapeType(value: ShapeType) {
        this.shape_type = value;
            
        return this;
    }

    setFluidHandling(value: FluidHandling) {
        this.fluid_handling = value;
            
        return this;
    }
}