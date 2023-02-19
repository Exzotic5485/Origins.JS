import { ShapeType, FluidHandling, BientityConditionType, BientityActionType, BlockActionType, EntityActionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class RaycastAction extends BaseEntityAction {
    public distance!: number;
    public block: boolean = true;
    public entity: boolean = true;
    public shape_type: ShapeType = "visual";
    public fluid_handling: FluidHandling = "any";
    public bientity_condition?: BientityConditionType;
    public bientity_action?: BientityActionType;
    public block_action?: BlockActionType;
    public before_action?: EntityActionType;
    public hit_action?: EntityActionType;
    public miss_action?: EntityActionType;
    public command_at_hit?: string;
    public command_hit_offset?: number;
    public command_along_ray?: string;
    public command_step: number = 1.0;
    public command_along_ray_only_on_hit: boolean = false;


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

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setBientityAction(value: BientityActionType) {
        this.bientity_action = value;
            
        return this;
    }

    setBlockAction(value: BlockActionType) {
        this.block_action = value;
            
        return this;
    }

    setBeforeAction(value: EntityActionType) {
        this.before_action = value;
            
        return this;
    }

    setHitAction(value: EntityActionType) {
        this.hit_action = value;
            
        return this;
    }

    setMissAction(value: EntityActionType) {
        this.miss_action = value;
            
        return this;
    }

    setCommandAtHit(value: string) {
        this.command_at_hit = value;
            
        return this;
    }

    setCommandHitOffset(value: number) {
        this.command_hit_offset = value;
            
        return this;
    }

    setCommandAlongRay(value: string) {
        this.command_along_ray = value;
            
        return this;
    }

    setCommandStep(value: number) {
        this.command_step = value;
            
        return this;
    }

    setCommandAlongRayOnlyOnHit(value: boolean) {
        this.command_along_ray_only_on_hit = value;
            
        return this;
    }
}