import { PowerOptions, HudRender, Identifier, Key } from "../Types";
import BasePower from "./BasePower";

export default class LaunchPower extends BasePower {
    private cooldown: number = 1;
    private speed!: number;
    private hud_render?: HudRender;
    private sound?: Identifier;
    private key?: Key;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:launch";
    }

    

    setCooldown(value: number) {
        this.cooldown = value;
            
        return this;
    }

    setSpeed(value: number) {
        this.speed = value;
            
        return this;
    }

    setHudRender(value: HudRender) {
        this.hud_render = value;
            
        return this;
    }

    setSound(value: Identifier) {
        this.sound = value;
            
        return this;
    }

    setKey(value: Key) {
        this.key = value;
            
        return this;
    }
}