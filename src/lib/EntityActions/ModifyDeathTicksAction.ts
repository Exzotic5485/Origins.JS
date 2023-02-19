import { AttributeModifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ModifyDeathTicksAction extends BaseEntityAction {
    public modifier!: AttributeModifier;


    constructor() {
        super()
        this.type = "origins:modify_death_ticks";
    }

    

    setModifier(value: AttributeModifier) {
        this.modifier = value;
            
        return this;
    }
}