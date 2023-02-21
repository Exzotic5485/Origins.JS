import { PowerOptions, EntityConditionType, BientityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class SelfGlowPower extends BasePower {
    public entity_condition?: EntityConditionType;
    public bientity_condition?: BientityConditionType;
    public use_teams: boolean = true;
    public red: number = 1.0;
    public green: number = 1.0;
    public blue: number = 1.0;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:self_glow";
    }

    

    setEntityCondition(value: EntityConditionType) {
        this.entity_condition = value;
            
        return this;
    }

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setUseTeams(value: boolean) {
        this.use_teams = value;
            
        return this;
    }

    setRed(value: number) {
        this.red = value;
            
        return this;
    }

    setGreen(value: number) {
        this.green = value;
            
        return this;
    }

    setBlue(value: number) {
        this.blue = value;
            
        return this;
    }
}