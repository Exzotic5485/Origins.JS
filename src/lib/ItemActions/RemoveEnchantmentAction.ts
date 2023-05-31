import { Identifier, ArrayOfIdentifiers } from "../Types";
import BaseItemAction from "./BaseItemAction";

export default class RemoveEnchantmentAction extends BaseItemAction {
    private enchantment?: Identifier;
    private enchantments?: ArrayOfIdentifiers;
    private levels?: number;
    private reset_repair_cost: boolean = false;


    constructor() {
        super()
        this.type = "origins:remove_enchantment";
    }

    

    setEnchantment(value: Identifier) {
        this.enchantment = value;
            
        return this;
    }

    setEnchantments(value: ArrayOfIdentifiers) {
        this.enchantments = value;
            
        return this;
    }

    setLevels(value: number) {
        this.levels = value;
            
        return this;
    }

    setResetRepairCost(value: boolean) {
        this.reset_repair_cost = value;
            
        return this;
    }
}