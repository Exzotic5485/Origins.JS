import { Identifier } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class SetBlockAction extends BaseBlockAction {
    private block!: Identifier;


    constructor() {
        super()
        this.type = "origins:set_block";
    }

    

    setBlock(value: Identifier) {
        this.block = value;
            
        return this;
    }
}