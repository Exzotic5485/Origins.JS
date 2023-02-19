import { Comparison } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class BlockStateCondition extends BaseBlockAction {
    public property!: string;
    public comparison?: Comparison;
    public compare_to?: number;
    public value?: boolean;
    public enum?: string;


    constructor() {
        super()
        this.type = "origins:block_state";
    }

    

    setProperty(value: string) {
        this.property = value;
            
        return this;
    }

    setComparison(value: Comparison) {
        this.comparison = value;
            
        return this;
    }

    setCompareTo(value: number) {
        this.compare_to = value;
            
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
}