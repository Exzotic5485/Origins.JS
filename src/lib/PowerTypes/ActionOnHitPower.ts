import { PowerOptions, BientityActionType, BientityConditionType, DamageConditionType, HudRender } from "../Types";
import BasePower from "./BasePower";

export default class ActionOnHitPower extends BasePower {
    public bientity_action!: BientityActionType;
    public bientity_condition?: BientityConditionType;
    public damage_condition?: DamageConditionType;
    public cooldown: number = 1;
    public hud_render: HudRender = {"should_render": false};


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_on_hit";
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