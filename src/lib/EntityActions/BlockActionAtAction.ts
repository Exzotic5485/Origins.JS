import { BlockActionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class BlockActionAtAction extends BaseEntityAction {
    private block_action!: BlockActionType;


    constructor() {
        super()
        this.type = "origins:block_action_at";
    }

    

    setBlockAction(value: BlockActionType) {
        this.block_action = value;
            
        return this;
    }
}