import {  } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class ModifyBlockStateAction extends BaseBlockAction {
    public property!: string;
    public operation: string = "add";
    public change?: number;
    public value?: boolean;
    public enum?: string;
    public cycle: boolean = false;


    constructor() {
        super()
        this.type = "origins:modify_block_state";
    }

    

    setProperty(value: string) {
        this.property = value;
            
        return this;
    }

    setOperation(value: string) {
        this.operation = value;
            
        return this;
    }

    setChange(value: number) {
        this.change = value;
            
        return this;
    }

    setValue(value: boolean) {
        this.value = value;
            
        return this;
    }

    setEnum(value: string) {
        this.enum = value;
            
        return this;
    }

    setCycle(value: boolean) {
        this.cycle = value;
            
        return this;
    }
}