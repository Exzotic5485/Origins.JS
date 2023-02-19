import { ItemStack, ItemActionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class GiveAction extends BaseEntityAction {
    public stack!: ItemStack;
    public item_action?: ItemActionType;
    public preferred_slot?: string;


    constructor() {
        super()
        this.type = "origins:give";
    }

    

    setStack(value: ItemStack) {
        this.stack = value;
            
        return this;
    }

    setItemAction(value: ItemActionType) {
        this.item_action = value;
            
        return this;
    }

    setPreferredSlot(value: string) {
        this.preferred_slot = value;
            
        return this;
    }
}