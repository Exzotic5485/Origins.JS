import { Identifier, Comparison } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class EnchantmentCondition extends BaseEntityAction {
    public enchantment!: Identifier;
    public calculation: string = "sum";
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:enchantment";
    }

    

    setEnchantment(value: Identifier) {
        this.enchantment = value;
            
        return this;
    }

    setCalculation(value: string) {
        this.calculation = value;
            
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