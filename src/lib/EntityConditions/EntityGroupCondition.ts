import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class EntityGroupCondition extends BaseEntityAction {
    public group!: string;


    constructor() {
        super()
        this.type = "origins:entity_group";
    }

    

    setGroup(value: string) {
        this.group = value;
            
        return this;
    }
}