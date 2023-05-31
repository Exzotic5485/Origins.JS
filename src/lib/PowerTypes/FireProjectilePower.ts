import { PowerOptions, Identifier, HudRender, Key } from "../Types";
import BasePower from "./BasePower";

export default class FireProjectilePower extends BasePower {
    private entity_type!: Identifier;
    private cooldown: number = 1;
    private hud_render?: HudRender;
    private count: number = 1;
    private interval: number = 0;
    private start_delay: number = 0;
    private speed: number = 1.5;
    private divergence: number = 1.0;
    private sound?: Identifier;
    private tag?: string;
    private key?: Key;


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