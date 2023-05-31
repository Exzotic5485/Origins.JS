import { Identifier, Comparison } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class EnchantmentCondition extends BaseItemCondition {
    private enchantment!: Identifier;
    private comparison!: Comparison;
    private compare_to!: number;


    constructor() {
        super()
        this.type = "origins:enchantment";
    }

    

    setEnchantment(value: Identifier) {
        this.enchantment = value;
            
        return this;
    }

    setComparison(value: Comparison) {
        this.comparison = value;
            
        return this;
    }

    setCompareTo(value: number) {
        this.compare_to = value;
            
        return this;
    }
}