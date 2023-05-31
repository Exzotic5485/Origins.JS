import { EntityActionType, BientityActionType, BientityConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class PassengerActionAction extends BaseEntityAction {
    private action?: EntityActionType;
    private bientity_action?: BientityActionType;
    private bientity_condition?: BientityConditionType;
    private recursive: boolean = false;


    constructor() {
        super()
        this.type = "origins:passenger_action";
    }

    

    setAction(value: EntityActionType) {
        this.action = value;
            
        return this;
    }

    setBientityAction(value: BientityActionType) {
        this.bientity_action = value;
            
        return this;
    }

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setRecursive(value: boolean) {
        this.recursive = value;
            
        return this;
    }
}