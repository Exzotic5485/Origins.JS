import { PowerOptions, StatusEffectInstance, ArrayOfStatusEffectInstances } from "../Types";
import BasePower from "./BasePower";

export default class StackingStatusEffectPower extends BasePower {
    public min_stacks!: number;
    public max_stacks!: number;
    public duration_per_stack!: number;
    public tick_rate: number = 10;
    public effect?: StatusEffectInstance;
    public effects?: ArrayOfStatusEffectInstances;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:stacking_status_effect";
    }

    

    setMinStacks(value: number) {
        this.min_stacks = value;
            
        return this;
    }

    setMaxStacks(value: number) {
        this.max_stacks = value;
            
        return this;
    }

    setDurationPerStack(value: number) {
        this.duration_per_stack = value;
            
        return this;
    }

    setTickRate(value: number) {
        this.tick_rate = value;
            
        return this;
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