import { PowerOptions, BientityConditionType, BlockConditionType, ItemConditionType } from "../Types";
import BasePower from "./BasePower";

export default class ReplaceLootTablePower extends BasePower {
    public replace!: Object;
    public bientity_condition?: BientityConditionType;
    public block_condition?: BlockConditionType;
    public item_condition?: ItemConditionType;
    public priority: number = 0;


    constructor(options: PowerOptions) {
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