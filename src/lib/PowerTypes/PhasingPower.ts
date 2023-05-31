import { PowerOptions, BlockConditionType, EntityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PhasingPower extends BasePower {
    private blacklist: boolean = false;
    private block_condition?: BlockConditionType;
    private render_type: string = "blindness";
    private view_distance: number = 10.0;
    private phase_down_condition?: EntityConditionType;


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