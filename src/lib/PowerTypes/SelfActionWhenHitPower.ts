import { PowerOptions, EntityActionType, HudRender, DamageConditionType } from "../Types";
import BasePower from "./BasePower";

export default class SelfActionWhenHitPower extends BasePower {
    private entity_action!: EntityActionType;
    private cooldown: number = 1;
    private hud_render?: HudRender;
    private damage_condition?: DamageConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:self_action_when_hit";
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

    setDamageCondition(value: DamageConditionType) {
        this.damage_condition = value;
            
        return this;
    }
}