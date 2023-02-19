import { PowerOptions, Identifier, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyAttributePower extends BasePower {
    public attribute!: Identifier;
    public modifier?: AttributeModifier;
    public modifiers?: ArrayOfAttributeModifiers;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:modify_attribute";
    }

    

    setAttribute(value: Identifier) {
        this.attribute = value;
            
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