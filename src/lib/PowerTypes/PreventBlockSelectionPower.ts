import { PowerOptions, BlockConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventBlockSelectionPower extends BasePower {
    private block_condition?: BlockConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:prevent_block_selection";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }
}