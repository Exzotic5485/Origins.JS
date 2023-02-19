import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class AddXpAction extends BaseEntityAction {
    public points?: number;
    public levels?: number;


    constructor() {
        super()
        this.type = "origins:add_xp";
    }


    setPoints(value: number) {
        this.points = value;
            
        return this;
    }

    setLevels(value: number) {
        this.levels = value;
            
        return this;
    }
}