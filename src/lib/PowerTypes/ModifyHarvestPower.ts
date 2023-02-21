import { PowerOptions, BlockConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ModifyHarvestPower extends BasePower {
    public block_condition?: BlockConditionType;
    public allow!: boolean;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_harvest";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setAllow(value: boolean) {
        this.allow = value;
            
        return this;
    }
}