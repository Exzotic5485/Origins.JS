import { ItemConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class EquippedItemCondition extends BaseEntityAction {
    private equipment_slot!: string;
    private item_condition!: ItemConditionType;


    constructor() {
        super()
        this.type = "origins:equipped_item";
    }

    

    setEquipmentSlot(value: string) {
        this.equipment_slot = value;
            
        return this;
    }

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }
}