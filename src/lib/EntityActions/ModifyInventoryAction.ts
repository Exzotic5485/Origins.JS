import { InventoryType, EntityActionType, ItemActionType, ItemConditionType, ItemSlot, ArrayOfItemSlots, Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ModifyInventoryAction extends BaseEntityAction {
    public inventory_type: InventoryType = "inventory";
    public entity_action?: EntityActionType;
    public item_action?: ItemActionType;
    public item_condition?: ItemConditionType;
    public slot?: ItemSlot;
    public slots?: ArrayOfItemSlots;
    public power?: Identifier;


    constructor() {
        super()
        this.type = "origins:modify_inventory";
    }

    

    setInventoryType(value: InventoryType) {
        this.inventory_type = value;
            
        return this;
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

    setSlot(value: ItemSlot) {
        this.slot = value;
            
        return this;
    }

    setSlots(value: ArrayOfItemSlots) {
        this.slots = value;
            
        return this;
    }

    setPower(value: Identifier) {
        this.power = value;
            
        return this;
    }
}