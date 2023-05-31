import { PowerOptions, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifyLavaSpeedPower extends BasePower {
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_lava_speed";
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