import { PowerOptions, EntityActionType, DamageConditionType, HudRender } from "../Types";
import BasePower from "./BasePower";

export default class ActionWhenDamageTakenPower extends BasePower {
    public entity_action!: EntityActionType;
    public damage_condition?: DamageConditionType;
    public cooldown!: number;
    public hud_render: HudRender = {"should_render": false};


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:action_when_damage_taken";
    }

    

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
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