import {  } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class NameCondition extends BaseDamageCondition {
    public name!: string;


    constructor() {
        super()
        this.type = "origins:name";
    }

    

    setName(value: string) {
        this.name = value;
            
        return this;
    }
}