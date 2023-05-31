import { PowerOptions, DamageConditionType, AttributeModifier, ArrayOfAttributeModifiers, EntityConditionType, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ModifyProjectileDamagePower extends BasePower {
    private damage_condition?: DamageConditionType;
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;
    private target_condition?: EntityConditionType;
    private self_action?: EntityActionType;
    private target_action?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_projectile_damage";
    }

    

    setDamageCondition(value: DamageConditionType) {
        this.damage_condition = value;
            
        return this;
    }

    setModifier(value: AttributeModifier) {
        this.modifier = value;
            
        return this;
    }

    setModifiers(value: ArrayOfAttributeModifiers) {
        this.modifiers = value;
            
        return this;
    }

    setTargetCondition(value: EntityConditionType) {
        this.target_condition = value;
            
        return this;
    }

    setSelfAction(value: EntityActionType) {
        this.self_action = value;
            
        return this;
    }

    setTargetAction(value: EntityActionType) {
        this.target_action = value;
            
        return this;
    }
}