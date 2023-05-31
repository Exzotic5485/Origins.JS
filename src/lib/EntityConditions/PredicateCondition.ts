import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class PredicateCondition extends BaseEntityAction {
    private predicate!: Identifier;


    constructor() {
        super()
        this.type = "origins:predicate";
    }

    

    setPredicate(value: Identifier) {
        this.predicate = value;
            
        return this;
    }
}