import {  } from "../Types";
import BaseItemAction from "./BaseItemAction";

export default class MergeNbtAction extends BaseItemAction {
    private nbt!: string;


    constructor() {
        super()
        this.type = "origins:merge_nbt";
    }

    

    setNbt(value: string) {
        this.nbt = value;
            
        return this;
    }
}