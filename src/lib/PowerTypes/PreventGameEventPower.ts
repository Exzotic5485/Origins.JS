import { PowerOptions, Identifier, ArrayOfIdentifiers, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventGameEventPower extends BasePower {
    private event?: Identifier;
    private events?: ArrayOfIdentifiers;
    private tag?: Identifier;
    private entity_action?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:prevent_game_event";
    }

    

    setEvent(value: Identifier) {
        this.event = value;
            
        return this;
    }

    setEvents(value: ArrayOfIdentifiers) {
        this.events = value;
            
        return this;
    }

    setTag(value: Identifier) {
        this.tag = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }
}