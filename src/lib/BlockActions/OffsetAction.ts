import { BlockActionType } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class OffsetAction extends BaseBlockAction {
    public action!: BlockActionType;
    public x: number = 0;
    public y: number = 0;
    public z: number = 0;


    constructor() {
        super()
        this.type = "origins:offset";
    }

    

    setAction(value: BlockActionType) {
        this.action = value;
            
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