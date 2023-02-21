import { PowerOptions, PositionedItemStack } from "../Types";
import BasePower from "./BasePower";

export default class StartingEquipmentPower extends BasePower {
    public stack?: PositionedItemStack;
    public stacks?: PositionedItemStack[];
    public recurrent: boolean = false;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:starting_equipment";
    }

    

    setStack(value: PositionedItemStack) {
        this.stack = value;
            
        return this;
    }

    setStacks(value: PositionedItemStack[]) {
        this.stacks = value;
            
        return this;
    }

    setRecurrent(value: boolean) {
        this.recurrent = value;
            
        return this;
    }
}