import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class NbtCondition extends BaseEntityAction {
    private nbt!: string;


    constructor() {
        super()
        this.type = "origins:nbt";
    }

    

    setNbt(value: string) {
        this.nbt = value;
            
        return this;
    }
}