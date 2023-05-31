import { PowerOptions, HudRender, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ResourcePower extends BasePower {
    private min!: number;
    private max!: number;
    private hud_render?: HudRender;
    private start_value?: number;
    private min_action?: EntityActionType;
    private max_action?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:resource";
    }

    

    setMin(value: number) {
        this.min = value;
            
        return this;
    }

    setMax(value: number) {
        this.max = value;
            
        return this;
    }

    setHudRender(value: HudRender) {
        this.hud_render = value;
            
        return this;
    }

    setStartValue(value: number) {
        this.start_value = value;
            
        return this;
    }

    setMinAction(value: EntityActionType) {
        this.min_action = value;
            
        return this;
    }

    setMaxAction(value: EntityActionType) {
        this.max_action = value;
            
        return this;
    }
}