import { PowerOptions, Identifier, ItemActionType, EntityActionType, BlockActionType, ItemConditionType, ItemStack } from "../Types";
import BasePower from "./BasePower";

export default class ModifyCraftingPower extends BasePower {
    private recipe?: Identifier;
    private item_action?: ItemActionType;
    private item_action_after_crafting?: ItemActionType;
    private entity_action?: EntityActionType;
    private block_action?: BlockActionType;
    private item_condition?: ItemConditionType;
    private result?: ItemStack;


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