import { EntityActionType } from "../Types";
import BaseBientityAction from "./BaseBientityAction";

export default class ActorActionAction extends BaseBientityAction {
    private action!: EntityActionType;


    constructor() {
        super()
        this.type = "origins:actor_action";
    }

    

    setAction(value: EntityActionType) {
        this.action = value;
            
        return this;
    }
}