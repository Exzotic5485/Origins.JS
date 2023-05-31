import { Identifier } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class AddBlockAction extends BaseBlockAction {
    private block!: Identifier;


    constructor() {
        super()
        this.type = "origins:add_block";
    }

    

    setBlock(value: Identifier) {
        this.block = value;
            
        return this;
    }
}