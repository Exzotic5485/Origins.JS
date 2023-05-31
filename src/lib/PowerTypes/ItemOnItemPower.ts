import { PowerOptions, ItemConditionType, ItemStack, ItemActionType, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ItemOnItemPower extends BasePower {
    private using_item_condition?: ItemConditionType;
    private on_item_condition?: ItemConditionType;
    private result?: ItemStack;
    private result_from_on_stack: number = 0;
    private using_item_action?: ItemActionType;
    private on_item_action?: ItemActionType;
    private result_item_action?: ItemActionType;
    private entity_action?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:item_on_item";
    }

    

    setUsingItemCondition(value: ItemConditionType) {
        this.using_item_condition = value;
            
        return this;
    }

    setOnItemCondition(value: ItemConditionType) {
        this.on_item_condition = value;
            
        return this;
    }

    setResult(value: ItemStack) {
        this.result = value;
            
        return this;
    }

    setResultFromOnStack(value: number) {
        this.result_from_on_stack = value;
            
        return this;
    }

    setUsingItemAction(value: ItemActionType) {
        this.using_item_action = value;
            
        return this;
    }

    setOnItemAction(value: ItemActionType) {
        this.on_item_action = value;
            
        return this;
    }

    setResultItemAction(value: ItemActionType) {
        this.result_item_action = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }
}