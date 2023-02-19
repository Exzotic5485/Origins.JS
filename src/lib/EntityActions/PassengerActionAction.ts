import { EntityActionType, BientityActionType, BientityConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class PassengerActionAction extends BaseEntityAction {
    public action?: EntityActionType;
    public bientity_action?: BientityActionType;
    public bientity_condition?: BientityConditionType;
    public recursive: boolean = false;


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