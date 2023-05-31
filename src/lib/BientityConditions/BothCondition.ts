import { EntityConditionType } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class BothCondition extends BaseBientityCondition {
    private condition!: EntityConditionType;


    constructor() {
        super()
        this.type = "origins:both";
    }

    

    setCondition(value: EntityConditionType) {
        this.condition = value;
            
        return this;
    }
}