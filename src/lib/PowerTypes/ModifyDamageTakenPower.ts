import { PowerOptions, BientityActionType, EntityActionType, BientityConditionType, EntityConditionType, DamageConditionType, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyDamageTakenPower extends BasePower {
    private bientity_action?: BientityActionType;
    private self_action?: EntityActionType;
    private attacker_action?: EntityActionType;
    private bientity_condition?: BientityConditionType;
    private apply_armor_condition?: EntityConditionType;
    private damage_armor_condition?: EntityConditionType;
    private damage_condition?: DamageConditionType;
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_damage_taken";
    }

    

    setBientityAction(value: BientityActionType) {
        this.bientity_action = value;
            
        return this;
    }

    setSelfAction(value: EntityActionType) {
        this.self_action = value;
            
        return this;
    }

    setAttackerAction(value: EntityActionType) {
        this.attacker_action = value;
            
        return this;
    }

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setApplyArmorCondition(value: EntityConditionType) {
        this.apply_armor_condition = value;
            
        return this;
    }

    setDamageArmorCondition(value: EntityConditionType) {
        this.damage_armor_condition = value;
            
        return this;
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
}