import { PowerOptions, Identifier, ItemActionType, EntityActionType, BlockActionType, ItemConditionType, ItemStack } from "../Types";
import BasePower from "./BasePower";

export default class ModifyCraftingPower extends BasePower {
    public recipe?: Identifier;
    public item_action?: ItemActionType;
    public item_action_after_crafting?: ItemActionType;
    public entity_action?: EntityActionType;
    public block_action?: BlockActionType;
    public item_condition?: ItemConditionType;
    public result?: ItemStack;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_crafting";
    }

    

    setRecipe(value: Identifier) {
        this.recipe = value;
            
        return this;
    }

    setItemAction(value: ItemActionType) {
        this.item_action = value;
            
        return this;
    }

    setItemActionAfterCrafting(value: ItemActionType) {
        this.item_action_after_crafting = value;
            
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

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }

    setResult(value: ItemStack) {
        this.result = value;
            
        return this;
    }
}