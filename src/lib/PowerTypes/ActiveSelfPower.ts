import { PowerOptions, EntityActionType, HudRender, Key } from "../Types";
import BasePower from "./BasePower";

export default class ActiveSelfPower extends BasePower {
    public entity_action!: EntityActionType;
    public cooldown: number = 1;
    public hud_render: HudRender = {"should_render": false};
    public key: Key = {"key": "key.origins.primary_active"};


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:active_self";
    }

    

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
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

    setKey(value: Key) {
        this.key = value;
            
        return this;
    }
}