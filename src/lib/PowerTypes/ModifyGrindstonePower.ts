import { PowerOptions, EntityActionType, BlockActionType, ItemActionType, ItemConditionType, ItemStack, AttributeModifier } from "../Types";
import BasePower from "./BasePower";

export default class ModifyGrindstonePower extends BasePower {
    private result_type: string = "unchanged";
    private entity_action?: EntityActionType;
    private block_action?: BlockActionType;
    private item_action?: ItemActionType;
    private item_action_after_grinding?: ItemActionType;
    private top_condition?: ItemConditionType;
    private bottom_condition?: ItemConditionType;
    private output_condition?: ItemConditionType;
    private result_stack?: ItemStack;
    private xp_modifier?: AttributeModifier;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_grindstone";
    }

    

    setResultType(value: string) {
        this.result_type = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }

    setBlockAction(value: BlockActionType) {
        this.block_action = value;
            
        return this;
    }

    setItemAction(value: ItemActionType) {
        this.item_action = value;
            
        return this;
    }

    setItemActionAfterGrinding(value: ItemActionType) {
        this.item_action_after_grinding = value;
            
        return this;
    }

    setTopCondition(value: ItemConditionType) {
        this.top_condition = value;
            
        return this;
    }

    setBottomCondition(value: ItemConditionType) {
        this.bottom_condition = value;
            
        return this;
    }

    setOutputCondition(value: ItemConditionType) {
        this.output_condition = value;
            
        return this;
    }

    setResultStack(value: ItemStack) {
        this.result_stack = value;
            
        return this;
    }

    setXpModifier(value: AttributeModifier) {
        this.xp_modifier = value;
            
        return this;
    }
}