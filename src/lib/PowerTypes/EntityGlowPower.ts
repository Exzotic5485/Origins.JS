import { PowerOptions, EntityConditionType, BientityConditionType } from "../Types";
import BasePower from "./BasePower";

export default class EntityGlowPower extends BasePower {
    private entity_condition?: EntityConditionType;
    private bientity_condition?: BientityConditionType;
    private use_teams: boolean = true;
    private red: number = 1.0;
    private green: number = 1.0;
    private blue: number = 1.0;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:entity_glow";
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