import { PowerOptions, Identifier, HudRender, Key } from "../Types";
import BasePower from "./BasePower";

export default class FireProjectilePower extends BasePower {
    public entity_type!: Identifier;
    public cooldown: number = 1;
    public hud_render?: HudRender;
    public count: number = 1;
    public interval: number = 0;
    public start_delay: number = 0;
    public speed: number = 1.5;
    public divergence: number = 1.0;
    public sound?: Identifier;
    public tag?: string;
    public key?: Key;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:fire_projectile";
    }

    

    setEntityType(value: Identifier) {
        this.entity_type = value;
            
        return this;
    }

    setCooldown(value: number) {
        this.cooldown = value;
            
        return this;
    }

    setHudRender(value: HudRender) {
        this.hud_render = value;
            
        return this;
    }

    setCount(value: number) {
        this.count = value;
            
        return this;
    }

    setInterval(value: number) {
        this.interval = value;
            
        return this;
    }

    setStartDelay(value: number) {
        this.start_delay = value;
            
        return this;
    }

    setSpeed(value: number) {
        this.speed = value;
            
        return this;
    }

    setDivergence(value: number) {
        this.divergence = value;
            
        return this;
    }

    setSound(value: Identifier) {
        this.sound = value;
            
        return this;
    }

    setTag(value: string) {
        this.tag = value;
            
        return this;
    }

    setKey(value: Key) {
        this.key = value;
            
        return this;
    }
}