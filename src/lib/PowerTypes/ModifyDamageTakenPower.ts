import { PowerOptions, BientityActionType, EntityActionType, BientityConditionType, EntityConditionType, DamageConditionType, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyDamageTakenPower extends BasePower {
    public bientity_action?: BientityActionType;
    public self_action?: EntityActionType;
    public attacker_action?: EntityActionType;
    public bientity_condition?: BientityConditionType;
    public apply_armor_condition?: EntityConditionType;
    public damage_armor_condition?: EntityConditionType;
    public damage_condition?: DamageConditionType;
    public modifier?: AttributeModifier;
    public modifiers?: ArrayOfAttributeModifiers;


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