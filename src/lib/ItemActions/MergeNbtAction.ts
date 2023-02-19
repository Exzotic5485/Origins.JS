import {  } from "../Types";
import BaseItemAction from "./BaseItemAction";

export default class MergeNbtAction extends BaseItemAction {
    public nbt!: string;


    constructor() {
        super()
        this.type = "origins:merge_nbt";
    }

    

    setNbt(value: string) {
        this.nbt = value;
            
        return this;
    }
}