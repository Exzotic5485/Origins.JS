import { PowerOptions, EntityActionType, DamageConditionType, HudRender } from "../Types";
import BasePower from "./BasePower";

export default class AttackerActionWhenHitPower extends BasePower {
    public entity_action!: EntityActionType;
    public cooldown: number = 1;
    public damage_condition?: DamageConditionType;
    public hud_render?: HudRender;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:attacker_action_when_hit";
    }

    

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }

    setCooldown(value: number) {
        this.cooldown = value;
            
        return this;
    }

    setDamageCondition(value: DamageConditionType) {
        this.damage_condition = value;
            
        return this;
    }

    setHudRender(value: HudRender) {
        this.hud_render = value;
            
        return this;
    }
}