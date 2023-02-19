import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class FeedAction extends BaseEntityAction {
    public food!: number;
    public saturation!: number;


    constructor() {
        super()
        this.type = "origins:feed";
    }

    

    setFood(value: number) {
        this.food = value;
            
        return this;
    }

    setSaturation(value: number) {
        this.saturation = value;
            
        return this;
    }
}