import { Identifier } from "../Types";
import BaseItemAction from "./BaseItemAction";

export default class ModifyAction extends BaseItemAction {
    public modifier!: Identifier;


    constructor() {
        super()
        this.type = "origins:modify";
    }

    

    setModifier(value: Identifier) {
        this.modifier = value;
            
        return this;
    }
}