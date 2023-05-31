import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class SetFallDistanceAction extends BaseEntityAction {
    private fall_distance!: number;


    constructor() {
        super()
        this.type = "origins:set_fall_distance";
    }

    

    setFallDistance(value: number) {
        this.fall_distance = value;
            
        return this;
    }
}