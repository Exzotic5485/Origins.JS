import { Identifier, AttributeModifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ModifyStatAction extends BaseEntityAction {
    public stat!: Identifier;
    public modifier!: AttributeModifier;


    constructor() {
        super()
        this.type = "origins:modify_stat";
    }

    

    setStat(value: Identifier) {
        this.stat = value;
            
        return this;
    }

    setModifier(value: AttributeModifier) {
        this.modifier = value;
            
        return this;
    }
}