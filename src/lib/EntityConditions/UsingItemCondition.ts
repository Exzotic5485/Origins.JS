import { ItemConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class UsingItemCondition extends BaseEntityAction {
    private item_condition?: ItemConditionType;


    constructor() {
        super()
        this.type = "origins:using_item";
    }

    

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }
}