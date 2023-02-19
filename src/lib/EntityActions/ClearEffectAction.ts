import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ClearEffectAction extends BaseEntityAction {
    public effect?: Identifier;


    constructor() {
        super()
        this.type = "origins:clear_effect";
    }

    

    setEffect(value: Identifier) {
        this.effect = value;
            
        return this;
    }
}