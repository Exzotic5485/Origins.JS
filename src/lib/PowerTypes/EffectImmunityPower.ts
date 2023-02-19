import { PowerOptions, Identifier, ArrayOfIdentifiers } from "../Types";
import BasePower from "./BasePower";

export default class EffectImmunityPower extends BasePower {
    public effect?: Identifier;
    public effects?: ArrayOfIdentifiers;
    public inverted: boolean = false;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:effect_immunity";
    }

    

    setEffect(value: Identifier) {
        this.effect = value;
            
        return this;
    }

    setEffects(value: ArrayOfIdentifiers) {
        this.effects = value;
            
        return this;
    }

    setInverted(value: boolean) {
        this.inverted = value;
            
        return this;
    }
}