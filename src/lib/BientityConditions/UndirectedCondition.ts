import { BientityConditionType } from "../Types";
import BaseBientityCondition from "./BaseBientityCondition";

export default class UndirectedCondition extends BaseBientityCondition {
    public condition!: BientityConditionType;


    constructor() {
        super()
        this.type = "origins:undirected";
    }

    

    setCondition(value: BientityConditionType) {
        this.condition = value;
            
        return this;
    }
}