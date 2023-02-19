import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class EntityTypeCondition extends BaseEntityAction {
    public entity_type!: Identifier;


    constructor() {
        super()
        this.type = "origins:entity_type";
    }

    

    setEntityType(value: Identifier) {
        this.entity_type = value;
            
        return this;
    }
}