import { EntityConditionType } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class AttackerCondition extends BaseDamageCondition {
    private entity_condition?: EntityConditionType;


    constructor() {
        super()
        this.type = "origins:attacker";
    }

    

    setEntityCondition(value: EntityConditionType) {
        this.entity_condition = value;
            
        return this;
    }
}