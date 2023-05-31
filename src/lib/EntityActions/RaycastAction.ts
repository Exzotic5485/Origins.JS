import { ShapeType, FluidHandling, BientityConditionType, BientityActionType, BlockActionType, EntityActionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class RaycastAction extends BaseEntityAction {
    private distance!: number;
    private block: boolean = true;
    private entity: boolean = true;
    private shape_type: ShapeType = "visual";
    private fluid_handling: FluidHandling = "any";
    private bientity_condition?: BientityConditionType;
    private bientity_action?: BientityActionType;
    private block_action?: BlockActionType;
    private before_action?: EntityActionType;
    private hit_action?: EntityActionType;
    private miss_action?: EntityActionType;
    private command_at_hit?: string;
    private command_hit_offset?: number;
    private command_along_ray?: string;
    private command_step: number = 1.0;
    private command_along_ray_only_on_hit: boolean = false;


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