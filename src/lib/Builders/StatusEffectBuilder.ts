import { Identifier, StatusEffectInstance } from "../Types";

export default class StatusEffectBuilder implements StatusEffectInstance {
    effect!: Identifier;
    duration?: number;
    amplifier?: number;
    is_ambient?: boolean;
    show_particles?: boolean;
    show_icon?: boolean;

    private constructor(effect?: Identifier) {
        if(effect) this.effect = effect;
    }

    setEffect(value: Identifier) {
        this.effect = value;

        return this;
    }

    setDuration(value: number) {
        this.duration = value;

        return this;
    }

    setAmplifier(value: number) {
        this.amplifier = value;

        return this;
    }

    setIsAmbient(value: boolean) {
        this.is_ambient = value;

        return this;
    }

    setShowParticles(value: boolean) {
        this.show_particles = value;

        return this;
    }

    setShowIcon(value: boolean) {
        this.show_icon = value;

        return this;
    }
}