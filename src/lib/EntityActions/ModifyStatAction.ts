import { Identifier, AttributeModifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ModifyStatAction extends BaseEntityAction {
    private stat!: Identifier;
    private modifier!: AttributeModifier;


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