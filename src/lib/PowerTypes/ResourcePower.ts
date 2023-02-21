import { PowerOptions, HudRender, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ResourcePower extends BasePower {
    public min!: number;
    public max!: number;
    public hud_render?: HudRender;
    public start_value?: number;
    public min_action?: EntityActionType;
    public max_action?: EntityActionType;


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