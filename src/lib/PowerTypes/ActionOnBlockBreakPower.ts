import { PowerOptions, EntityActionType, BlockActionType, BlockConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ActionOnBlockBreakPower extends BasePower {
    public entity_action?: EntityActionType;
    public block_action?: BlockActionType;
    public block_condition?: BlockConditionType;
    public only_when_harvested: boolean = true;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:action_on_block_break";
    }

    

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }

    setBlockAction(value: BlockActionType) {
        this.block_action = value;
            
        return this;
    }

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setOnlyWhenHarvested(value: boolean) {
        this.only_when_harvested = value;
            
        return this;
    }
}