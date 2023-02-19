import {  } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class BonemealAction extends BaseBlockAction {
    public effects: boolean = true;


    constructor() {
        super()
        this.type = "origins:bonemeal";
    }

    

    setEffects(value: boolean) {
        this.effects = value;
            
        return this;
    }
}