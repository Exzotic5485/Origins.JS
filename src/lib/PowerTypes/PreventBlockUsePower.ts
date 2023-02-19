import { PowerOptions, BlockConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventBlockUsePower extends BasePower {
    public block_condition!: BlockConditionType;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:prevent_block_use";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }
}