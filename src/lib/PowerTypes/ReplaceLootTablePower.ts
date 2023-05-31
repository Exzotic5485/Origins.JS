import { PowerOptions, BientityConditionType, BlockConditionType, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ReplaceLootTablePower extends BasePower {
    private replace!: Object;
    private bientity_condition?: BientityConditionType;
    private block_condition?: BlockConditionType;
    private item_condition?: ItemConditionType;
    private priority: number = 0;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:replace_loot_table";
    }

    

    setReplace(value: object) {
        this.replace = value;
            
        return this;
    }

    setBientityCondition(value: BientityConditionType) {
        this.bientity_condition = value;
            
        return this;
    }

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }

    setPriority(value: number) {
        this.priority = value;
            
        return this;
    }
}