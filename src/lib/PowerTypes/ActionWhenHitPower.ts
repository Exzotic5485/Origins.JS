import { PowerOptions, BientityActionType, BientityConditionType, DamageConditionType, HudRender } from "../Types";
import BasePower from "./BasePower";

export default class ActionWhenHitPower extends BasePower {
    private bientity_action!: BientityActionType;
    private bientity_condition?: BientityConditionType;
    private damage_condition?: DamageConditionType;
    private cooldown: number = 1;
    private hud_render: HudRender = {"should_render": false};


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_when_hit";
    }

    

    setBientityAction(value: BientityActionType) {
        this.bientity_action = value;
            
        return this;
    }

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setDamageCondition(value: DamageConditionType) {
        this.damage_condition = value;
            
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
}