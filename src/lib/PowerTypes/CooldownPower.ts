import { PowerOptions, HudRender } from "../Types";
import BasePower from "./BasePower";

export default class CooldownPower extends BasePower {
    private cooldown!: number;
    private hud_render: HudRender = {"should_render": false};


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:cooldown";
    }

    

    setCooldown(value: number) {
        this.cooldown = value;
            
        return this;
    }

    setHudRender(value: HudRender) {
        this.hud_render = value;
            
        return this;
    }
}