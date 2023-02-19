import { PowerOptions, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class RestrictArmorPower extends BasePower {
    public head?: ItemConditionType;
    public chest?: ItemConditionType;
    public legs?: ItemConditionType;
    public feet?: ItemConditionType;


    constructor(options: PowerOptions) {
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