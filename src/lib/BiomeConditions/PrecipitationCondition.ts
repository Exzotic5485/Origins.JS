import {  } from "../Types";
import BaseBiomeCondition from "./BaseBiomeCondition";

export default class PrecipitationCondition extends BaseBiomeCondition {
    public precipitation!: string;


    constructor() {
        super()
        this.type = "origins:precipitation";
    }

    

    setPrecipitation(value: string) {
        this.precipitation = value;
            
        return this;
    }
}