import { PowerOptions, ParticleEffect } from "../Types";
import BasePower from "./BasePower";

export default class ParticlePower extends BasePower {
    public particle!: ParticleEffect;
    public frequency!: number;
    public visible_in_first_person: boolean = false;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:particle";
    }

    

    setParticle(value: ParticleEffect) {
        this.particle = value;
            
        return this;
    }

    setFrequency(value: number) {
        this.frequency = value;
            
        return this;
    }

    setVisibleInFirstPerson(value: boolean) {
        this.visible_in_first_person = value;
            
        return this;
    }
}