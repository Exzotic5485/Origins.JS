import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class NbtCondition extends BaseEntityAction {
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