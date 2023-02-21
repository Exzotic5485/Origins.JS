import { PowerOptions, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ConditionedRestrictArmorPower extends BasePower {
    public head?: ItemConditionType;
    public chest?: ItemConditionType;
    public legs?: ItemConditionType;
    public feet?: ItemConditionType;
    public tick_rate: number = 80;


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