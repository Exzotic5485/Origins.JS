import { EntityConditionType } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class ActorConditionCondition extends BaseBientityCondition {
    private condition!: EntityConditionType;


    constructor() {
        super()
        this.type = "origins:actor_condition";
    }

    

    setCondition(value: EntityConditionType) {
        this.condition = value;
            
        return this;
    }
}