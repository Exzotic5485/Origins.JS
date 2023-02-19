import { PowerOptions, BientityActionType, EntityActionType, BientityConditionType, EntityConditionType, DamageConditionType, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyDamageDealtPower extends BasePower {
    public bientity_action?: BientityActionType;
    public self_action?: EntityActionType;
    public target_action?: EntityActionType;
    public bientity_condition?: BientityConditionType;
    public target_condition?: EntityConditionType;
    public damage_condition?: DamageConditionType;
    public modifier?: AttributeModifier;
    public modifiers?: ArrayOfAttributeModifiers;


    constructor(options: PowerOptions) {
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