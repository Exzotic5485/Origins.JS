import { BlockActionType } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class OffsetAction extends BaseBlockAction {
    private action!: BlockActionType;
    private x: number = 0;
    private y: number = 0;
    private z: number = 0;


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