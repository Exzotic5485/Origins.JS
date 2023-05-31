import { PowerOptions, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ConditionedRestrictArmorPower extends BasePower {
    private head?: ItemConditionType;
    private chest?: ItemConditionType;
    private legs?: ItemConditionType;
    private feet?: ItemConditionType;
    private tick_rate: number = 80;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:conditioned_restrict_armor";
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

    setTickRate(value: number) {
        this.tick_rate = value;
            
        return this;
    }
}