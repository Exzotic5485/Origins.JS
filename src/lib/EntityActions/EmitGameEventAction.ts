import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class EmitGameEventAction extends BaseEntityAction {
    public event!: Identifier;


    constructor() {
        super()
        this.type = "origins:emit_game_event";
    }

    

    setEvent(value: Identifier) {
        this.event = value;
            
        return this;
    }
}