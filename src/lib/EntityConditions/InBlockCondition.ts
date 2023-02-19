import { BlockConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class InBlockCondition extends BaseEntityAction {
    public block_condition!: BlockConditionType;


    constructor() {
        super()
        this.type = "origins:in_block";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }
}