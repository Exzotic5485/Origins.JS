import { BlockConditionType } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class OffsetCondition extends BaseBlockAction {
    public condition!: BlockConditionType;
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;


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