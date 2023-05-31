import { ItemActionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class EquippedItemActionAction extends BaseEntityAction {
    private equipment_slot!: string;
    private action!: ItemActionType;


    constructor() {
        super()
        this.type = "origins:equipped_item_action";
    }

    

    setEquipmentSlot(value: string) {
        this.equipment_slot = value;
            
        return this;
    }

    setAction(value: ItemActionType) {
        this.action = value;
            
        return this;
    }
}