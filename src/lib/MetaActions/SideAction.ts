import { ActionType, Side } from "../Types";
import BaseMetaAction from "./BaseMetaAction";

export default class SideAction extends BaseMetaAction {
    private action!: ActionType;
    private side!: Side;

    constructor() {
        super()
        this.type = "origins:side";
    }

    setAction(action: ActionType) {
        this.action = action;
            
        return this;
    }

    setSide(value: Side) {
        this.side = value;

        return this;
    }
}