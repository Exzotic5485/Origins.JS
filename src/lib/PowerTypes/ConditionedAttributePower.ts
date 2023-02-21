import { PowerOptions, AttributedAttributeModifier } from "../Types";
import BasePower from "./BasePower";

export default class ConditionedAttributePower extends BasePower {
    public modifier?: AttributedAttributeModifier;
    public modifiers?: AttributedAttributeModifier[];
    public tick_rate: number = 20;
    public update_health: boolean = true;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:conditioned_attribute";
    }

    

    setModifier(value: AttributedAttributeModifier) {
        this.modifier = value;
            
        return this;
    }

    setModifiers(value: AttributedAttributeModifier[]) {
        this.modifiers = value;
            
        return this;
    }

    setTickRate(value: number) {
        this.tick_rate = value;
            
        return this;
    }

    setUpdateHealth(value: boolean) {
        this.update_health = value;
            
        return this;
    }
}