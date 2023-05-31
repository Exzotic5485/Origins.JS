import { PowerOptions, ItemConditionType, ItemActionType, ItemStack, AttributeModifier, ArrayOfAttributeModifiers, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ModifyFoodPower extends BasePower {
    private item_condition?: ItemConditionType;
    private item_action?: ItemActionType;
    private replace_stack?: ItemStack;
    private food_modifier?: AttributeModifier;
    private food_modifiers?: ArrayOfAttributeModifiers;
    private saturation_modifier?: AttributeModifier;
    private saturation_modifiers?: ArrayOfAttributeModifiers;
    private entity_action?: EntityActionType;
    private always_edible: boolean = false;
    private prevent_effects: boolean = false;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_food";
    }

    

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }

    setItemAction(value: ItemActionType) {
        this.item_action = value;
            
        return this;
    }

    setReplaceStack(value: ItemStack) {
        this.replace_stack = value;
            
        return this;
    }

    setFoodModifier(value: AttributeModifier) {
        this.food_modifier = value;
            
        return this;
    }

    setFoodModifiers(value: ArrayOfAttributeModifiers) {
        this.food_modifiers = value;
            
        return this;
    }

    setSaturationModifier(value: AttributeModifier) {
        this.saturation_modifier = value;
            
        return this;
    }

    setSaturationModifiers(value: ArrayOfAttributeModifiers) {
        this.saturation_modifiers = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }

    setAlwaysEdible(value: boolean) {
        this.always_edible = value;
            
        return this;
    }

    setPreventEffects(value: boolean) {
        this.prevent_effects = value;
            
        return this;
    }
}