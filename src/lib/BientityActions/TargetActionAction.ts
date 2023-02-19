import { EntityActionType } from "../Types";
import BaseBientityAction from "./BaseBientityAction";

export default class TargetActionAction extends BaseBientityAction {
    public action!: EntityActionType;


    constructor() {
        super()
        this.type = "origins:target_action";
    }

    

    setAction(value: EntityActionType) {
        this.action = value;
            
        return this;
    }
}