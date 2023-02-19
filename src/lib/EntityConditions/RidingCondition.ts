import { BientityConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class RidingCondition extends BaseEntityAction {
    public bientity_condition?: BientityConditionType;


    constructor() {
        super()
        this.type = "origins:riding";
    }

    

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }
}