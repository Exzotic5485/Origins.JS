import { BlockConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class OnBlockCondition extends BaseEntityAction {
    private block_condition?: BlockConditionType;


    constructor() {
        super()
        this.type = "origins:on_block";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }
}