import { PowerOptions, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class RestrictArmorPower extends BasePower {
    private head?: ItemConditionType;
    private chest?: ItemConditionType;
    private legs?: ItemConditionType;
    private feet?: ItemConditionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:restrict_armor";
    }

    

    setHead(value: ItemConditionType) {
        this.head = value;
            
        return this;
    }

    setChest(value: ItemConditionType) {
        this.chest = value;
            
        return this;
    }

    setLegs(value: ItemConditionType) {
        this.legs = value;
            
        return this;
    }

    setFeet(value: ItemConditionType) {
        this.feet = value;
            
        return this;
    }
}