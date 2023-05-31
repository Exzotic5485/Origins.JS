import { BlockConditionType } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class OffsetCondition extends BaseBlockAction {
    private condition!: BlockConditionType;
    private x: number = 0;
    private y: number = 0;
    private z: number = 0;


    constructor() {
        super()
        this.type = "origins:offset";
    }

    

    setCondition(value: BlockConditionType) {
        this.condition = value;
            
        return this;
    }

    setX(value: number) {
        this.x = value;
            
        return this;
    }

    setY(value: number) {
        this.y = value;
            
        return this;
    }

    setZ(value: number) {
        this.z = value;
            
        return this;
    }
}