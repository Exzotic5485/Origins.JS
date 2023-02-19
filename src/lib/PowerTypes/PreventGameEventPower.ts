import { PowerOptions, Identifier, ArrayOfIdentifiers, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventGameEventPower extends BasePower {
    public event?: Identifier;
    public events?: ArrayOfIdentifiers;
    public tag?: Identifier;
    public entity_action?: EntityActionType;


    constructor(options: PowerOptions) {
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