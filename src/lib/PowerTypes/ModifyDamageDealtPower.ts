import { PowerOptions, BientityActionType, EntityActionType, BientityConditionType, EntityConditionType, DamageConditionType, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyDamageDealtPower extends BasePower {
    private bientity_action?: BientityActionType;
    private self_action?: EntityActionType;
    private target_action?: EntityActionType;
    private bientity_condition?: BientityConditionType;
    private target_condition?: EntityConditionType;
    private damage_condition?: DamageConditionType;
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_damage_dealt";
    }

    

    setBientityAction(value: BientityActionType) {
        this.bientity_action = value;
            
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

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setTargetCondition(value: EntityConditionType) {
        this.target_condition = value;
            
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