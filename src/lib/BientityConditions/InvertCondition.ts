import { BientityConditionType } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class InvertCondition extends BaseBientityCondition {
    public condition!: BientityConditionType;


    constructor() {
        super()
        this.type = "origins:invert";
    }

    

    setCondition(value: BientityConditionType) {
        this.condition = value;
            
        return this;
    }
}