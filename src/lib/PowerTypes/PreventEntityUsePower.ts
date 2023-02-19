import { PowerOptions, BientityActionType, ItemActionType, BientityConditionType, ItemConditionType, ItemStack } from "../Types";
import BasePower from "./BasePower";

export default class PreventEntityUsePower extends BasePower {
    public bientity_action?: BientityActionType;
    public held_item_action?: ItemActionType;
    public result_item_action?: ItemActionType;
    public bientity_condition?: BientityConditionType;
    public item_condition?: ItemConditionType;
    public hands: string[] = ["off_hand", "main_hand"];
    public result_stack?: ItemStack;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:prevent_entity_use";
    }

    

    setBientityAction(value: BientityActionType) {
        this.bientity_action = value;
            
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

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
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
}