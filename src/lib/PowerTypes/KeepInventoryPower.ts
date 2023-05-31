import { PowerOptions, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class KeepInventoryPower extends BasePower {
    private item_condition?: ItemConditionType;
    private slots?: number[];


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:keep_inventory";
    }

    

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }

    setSlots(value: number[]) {
        this.slots = value;
            
        return this;
    }
}