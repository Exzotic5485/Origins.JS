import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class BlockCollisionCondition extends BaseEntityAction {
    private offset_x!: number;
    private offset_y!: number;
    private offset_z!: number;


    constructor() {
        super()
        this.type = "origins:block_collision";
    }

    

    setOffsetX(value: number) {
        this.offset_x = value;
            
        return this;
    }

    setOffsetY(value: number) {
        this.offset_y = value;
            
        return this;
    }

    setOffsetZ(value: number) {
        this.offset_z = value;
            
        return this;
    }
}