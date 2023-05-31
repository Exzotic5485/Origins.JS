import { Identifier, ItemStack } from "../Types";

export default class ItemStackBuilder implements ItemStack {
    item!: Identifier;
    amount?: Number;
    tag?: string;

    private constructor() {

    }

    setItem(value: Identifier) {
        this.item = value;
            
        return this;
    }

    setAmount(value: Number) {
        this.amount = value;
            
        return this;
    }

    setTag(value: string) {
        this.tag = value;
            
        return this;
    }
}