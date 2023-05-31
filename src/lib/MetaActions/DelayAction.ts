import { ActionType } from "../Types";
import BaseMetaAction from "./BaseMetaAction";

export default class DelayAction extends BaseMetaAction {
    private action!: ActionType;
    private ticks!: number;

    constructor() {
        super()
        this.type = "origins:and";
    }

    setAction(action: ActionType) {
        this.action = action;
            
        return this;
    }

    setTicks(value: number) {
        this.ticks = value;

        return this;
    }
}