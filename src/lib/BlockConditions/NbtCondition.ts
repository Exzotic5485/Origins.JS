import {  } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class NbtCondition extends BaseBlockAction {
    public nbt!: string;


    constructor() {
        super()
        this.type = "origins:nbt";
    }

    

    setNbt(value: string) {
        this.nbt = value;
            
        return this;
    }
}