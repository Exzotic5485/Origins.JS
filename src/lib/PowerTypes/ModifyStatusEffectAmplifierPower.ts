import { PowerOptions, Identifier, ArrayOfIdentifiers, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyStatusEffectAmplifierPower extends BasePower {
    public status_effect?: Identifier;
    public status_effects?: ArrayOfIdentifiers;
    public modifier?: AttributeModifier;
    public modifiers?: ArrayOfAttributeModifiers;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:modify_status_effect_amplifier";
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