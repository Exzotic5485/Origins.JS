import { StatusEffectInstance, ArrayOfStatusEffectInstances } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ApplyEffectAction extends BaseEntityAction {
    private effect?: StatusEffectInstance;
    private effects?: ArrayOfStatusEffectInstances;


    constructor() {
        super()
        this.type = "origins:apply_effect";
    }

    

    setEffect(value: StatusEffectInstance) {
        this.effect = value;
            
        return this;
    }

    setEffects(value: ArrayOfStatusEffectInstances) {
        this.effects = value;
            
        return this;
    }
}