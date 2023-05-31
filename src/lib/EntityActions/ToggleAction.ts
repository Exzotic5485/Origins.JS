import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class ToggleAction extends BaseEntityAction {
    private power!: Identifier;


    constructor() {
        super()
        this.type = "origins:toggle";
    }

    

    setPower(value: Identifier) {
        this.power = value;
            
        return this;
    }
}