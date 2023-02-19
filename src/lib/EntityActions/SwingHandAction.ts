import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class SwingHandAction extends BaseEntityAction {
    public hand: string = "MAIN_HAND";


    constructor() {
        super()
        this.type = "origins:swing_hand";
    }

    

    setHand(value: string) {
        this.hand = value;
            
        return this;
    }
}