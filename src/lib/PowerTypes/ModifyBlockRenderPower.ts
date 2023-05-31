import { PowerOptions, BlockConditionType, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class ModifyBlockRenderPower extends BasePower {
    private block_condition?: BlockConditionType;
    private block!: Identifier;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_block_render";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setBlock(value: Identifier) {
        this.block = value;
            
        return this;
    }
}