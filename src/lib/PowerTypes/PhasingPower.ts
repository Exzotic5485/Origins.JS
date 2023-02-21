import { PowerOptions, BlockConditionType, EntityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PhasingPower extends BasePower {
    public blacklist: boolean = false;
    public block_condition?: BlockConditionType;
    public render_type: string = "blindness";
    public view_distance: number = 10.0;
    public phase_down_condition?: EntityConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:phasing";
    }

    

    setBlacklist(value: boolean) {
        this.blacklist = value;
            
        return this;
    }

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setRenderType(value: string) {
        this.render_type = value;
            
        return this;
    }

    setViewDistance(value: number) {
        this.view_distance = value;
            
        return this;
    }

    setPhaseDownCondition(value: EntityConditionType) {
        this.phase_down_condition = value;
            
        return this;
    }
}