import { PowerOptions, EntityActionType, ItemActionType, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ActionOnItemUsePower extends BasePower {
    private entity_action?: EntityActionType;
    private item_action?: ItemActionType;
    private item_condition?: ItemConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_on_item_use";
    }

    

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }

    setItemAction(value: ItemActionType) {
        this.item_action = value;
            
        return this;
    }

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }
}