import { PowerOptions, StatusEffectInstance, ArrayOfStatusEffectInstances } from "../Types";
import BasePower from "./BasePower";

export default class StackingStatusEffectPower extends BasePower {
    private min_stacks!: number;
    private max_stacks!: number;
    private duration_per_stack!: number;
    private tick_rate: number = 10;
    private effect?: StatusEffectInstance;
    private effects?: ArrayOfStatusEffectInstances;


    constructor(options?: PowerOptions) {
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