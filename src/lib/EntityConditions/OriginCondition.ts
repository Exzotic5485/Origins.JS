import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class OriginCondition extends BaseEntityAction {
    public origin!: Identifier;
    public layer?: Identifier;


    constructor() {
        super()
        this.type = "origins:origin";
    }

    

    setOrigin(value: Identifier) {
        this.origin = value;
            
        return this;
    }

    setLayer(value: Identifier) {
        this.layer = value;
            
        return this;
    }
}