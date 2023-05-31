import { PowerOptions, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ActionOnCallbackPower extends BasePower {
    private entity_action_chosen?: EntityActionType;
    private execute_chosen_when_orb: boolean = true;
    private entity_action_gained?: EntityActionType;
    private entity_action_lost?: EntityActionType;
    private entity_action_added?: EntityActionType;
    private entity_action_removed?: EntityActionType;
    private entity_action_respawned?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:action_on_callback";
    }

    

    setEntityActionChosen(value: EntityActionType) {
        this.entity_action_chosen = value;
            
        return this;
    }

    setExecuteChosenWhenOrb(value: boolean) {
        this.execute_chosen_when_orb = value;
            
        return this;
    }

    setEntityActionGained(value: EntityActionType) {
        this.entity_action_gained = value;
            
        return this;
    }

    setEntityActionLost(value: EntityActionType) {
        this.entity_action_lost = value;
            
        return this;
    }

    setEntityActionAdded(value: EntityActionType) {
        this.entity_action_added = value;
            
        return this;
    }

    setEntityActionRemoved(value: EntityActionType) {
        this.entity_action_removed = value;
            
        return this;
    }

    setEntityActionRespawned(value: EntityActionType) {
        this.entity_action_respawned = value;
            
        return this;
    }
}