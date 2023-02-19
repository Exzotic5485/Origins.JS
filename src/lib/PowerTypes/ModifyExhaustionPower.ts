import { PowerOptions, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyExhaustionPower extends BasePower {
    public modifier?: AttributeModifier;
    public modifiers?: ArrayOfAttributeModifiers;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:modify_exhaustion";
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