import { PowerOptions, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventItemUsePower extends BasePower {
    private item_condition?: ItemConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:prevent_item_use";
    }

    

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }
}