import { PowerOptions, Identifier, ArrayOfIdentifiers, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyStatusEffectDurationPower extends BasePower {
    private status_effect?: Identifier;
    private status_effects?: ArrayOfIdentifiers;
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_status_effect_duration";
    }

    

    setStatusEffect(value: Identifier) {
        this.status_effect = value;
            
        return this;
    }

    setStatusEffects(value: ArrayOfIdentifiers) {
        this.status_effects = value;
            
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