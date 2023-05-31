import { InventoryType, EntityActionType, ItemActionType, ItemConditionType, ItemSlot, ArrayOfItemSlots, Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class DropInventoryAction extends BaseEntityAction {
    private inventory_type: InventoryType = "inventory";
    private entity_action?: EntityActionType;
    private item_action?: ItemActionType;
    private item_condition?: ItemConditionType;
    private slot?: ItemSlot;
    private slots?: ArrayOfItemSlots;
    private power?: Identifier;
    private throw_randomly: boolean = false;
    private retain_ownership: boolean = true;


    constructor() {
        super()
        this.type = "origins:drop_inventory";
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

    setThrowRandomly(value: boolean) {
        this.throw_randomly = value;
            
        return this;
    }

    setRetainOwnership(value: boolean) {
        this.retain_ownership = value;
            
        return this;
    }
}