import { ParticleEffect, Vector } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class SpawnParticlesAction extends BaseEntityAction {
    private particle!: ParticleEffect;
    private count!: number;
    private speed: number = 0.0;
    private force: boolean = false;
    private spread: Vector = {"x": 0.5, "y": 0.25, "z": 0.5};
    private offset_y: number = 0.5;


    constructor() {
        super()
        this.type = "origins:spawn_particles";
    }

    

    setParticle(value: ParticleEffect) {
        this.particle = value;
            
        return this;
    }

    setCount(value: number) {
        this.count = value;
            
        return this;
    }

    setSpeed(value: number) {
        this.speed = value;
            
        return this;
    }

    setForce(value: boolean) {
        this.force = value;
            
        return this;
    }

    setSpread(value: Vector) {
        this.spread = value;
            
        return this;
    }

    setOffsetY(value: number) {
        this.offset_y = value;
            
        return this;
    }
}