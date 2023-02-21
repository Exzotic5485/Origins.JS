import { PowerOptions, EntityActionType, BlockActionType, BlockConditionType, ItemConditionType, ItemStack, ItemActionType, ActionResult } from "../Types";
import BasePower from "./BasePower";

export default class ActionOnBlockUsePower extends BasePower {
    public entity_action?: EntityActionType;
    public block_action?: BlockActionType;
    public block_condition?: BlockConditionType;
    public item_condition?: ItemConditionType;
    public directions: string[] = ["north", "east", "south", "west", "up", "down"];
    public hands: string[] = ["off_hand", "main_hand"];
    public result_stack?: ItemStack;
    public held_item_action?: ItemActionType;
    public result_item_action?: ItemActionType;
    public action_result: ActionResult = "success";


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_on_block_use";
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

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }

    setDirections(value: string[]) {
        this.directions = value;
            
        return this;
    }

    setHands(value: string[]) {
        this.hands = value;
            
        return this;
    }

    setResultStack(value: ItemStack) {
        this.result_stack = value;
            
        return this;
    }

    setHeldItemAction(value: ItemActionType) {
        this.held_item_action = value;
            
        return this;
    }

    setResultItemAction(value: ItemActionType) {
        this.result_item_action = value;
            
        return this;
    }

    setActionResult(value: ActionResult) {
        this.action_result = value;
            
        return this;
    }
}