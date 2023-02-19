import { AttributeModifier, Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ModifyResourceAction extends BaseEntityAction {
    public modifier!: AttributeModifier;
    public resource!: Identifier;


    constructor() {
        super()
        this.type = "origins:modify_resource";
    }

    

    setModifier(value: AttributeModifier) {
        this.modifier = value;
            
        return this;
    }

    setResource(value: Identifier) {
        this.resource = value;
            
        return this;
    }
}