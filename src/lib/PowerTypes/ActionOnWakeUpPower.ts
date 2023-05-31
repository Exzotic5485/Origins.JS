import { PowerOptions, EntityActionType, BlockActionType, BlockConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ActionOnWakeUpPower extends BasePower {
    private entity_action?: EntityActionType;
    private block_action?: BlockActionType;
    private block_condition?: BlockConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_on_wake_up";
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
}