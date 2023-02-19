import { PowerOptions, EntityActionType, HudRender, DamageConditionType, EntityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class TargetActionOnHitPower extends BasePower {
    public entity_action!: EntityActionType;
    public cooldown: number = 1;
    public hud_render?: HudRender;
    public damage_condition?: DamageConditionType;
    public target_condition?: EntityConditionType;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:target_action_on_hit";
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

    setTargetCondition(value: EntityConditionType) {
        this.target_condition = value;
            
        return this;
    }
}