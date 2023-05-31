import { ShapeType, FluidHandling, BientityConditionType, BlockConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class RaycastCondition extends BaseEntityAction {
    private distance!: number;
    private block: boolean = true;
    private entity: boolean = true;
    private shape_type: ShapeType = "visual";
    private fluid_handling: FluidHandling = "any";
    private match_bientity_condition?: BientityConditionType;
    private hit_bientity_condition?: BientityConditionType;
    private block_condition?: BlockConditionType;


    constructor() {
        super()
        this.type = "origins:raycast";
    }

    

    setDistance(value: number) {
        this.distance = value;
            
        return this;
    }

    setBlock(value: boolean) {
        this.block = value;
            
        return this;
    }

    setEntity(value: boolean) {
        this.entity = value;
            
        return this;
    }

    setShapeType(value: ShapeType) {
        this.shape_type = value;
            
        return this;
    }

    setFluidHandling(value: FluidHandling) {
        this.fluid_handling = value;
            
        return this;
    }

    setMatchBientityCondition(value: BientityConditionType) {
        this.match_bientity_condition = value;
            
        return this;
    }

    setHitBientityCondition(value: BientityConditionType) {
        this.hit_bientity_condition = value;
            
        return this;
    }

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }
}