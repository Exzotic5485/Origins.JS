import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class AttributeModifyTransferPower extends BasePower {
    public class!: Identifier;
    public attribute!: Identifier;
    public multiplier: number = 1.0;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:attribute_modify_transfer";
    }

    

    setClass(value: Identifier) {
        this.class = value;
            
        return this;
    }

    setAttribute(value: Identifier) {
        this.attribute = value;
            
        return this;
    }

    setMultiplier(value: number) {
        this.multiplier = value;
            
        return this;
    }
}