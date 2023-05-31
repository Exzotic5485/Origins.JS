import {  } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class ModifyBlockStateAction extends BaseBlockAction {
    private property!: string;
    private operation: string = "add";
    private change?: number;
    private value?: boolean;
    private enum?: string;
    private cycle: boolean = false;


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