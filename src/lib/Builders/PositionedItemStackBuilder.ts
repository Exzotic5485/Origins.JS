import { PositionedItemStack } from "../Types";
import ItemStackBuilder from "./ItemStackBuilder";

export default class PositionedItemStackBuilder extends ItemStackBuilder implements PositionedItemStack {
    slot?: number;

    public constructor() {
        super()
    }

    setSlot(value: number) {
        this.slot = value;
            
        return this;
    }
}