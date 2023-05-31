import { ActionType } from "../Types";
import BaseMetaAction from "./BaseMetaAction";

export default class ChanceAction extends BaseMetaAction {
    private action!: ActionType;
    private chance!: number;
    private fall_action?: ActionType;

    constructor() {
        super()
        this.type = "origins:chance";
    }

    setAction(action: ActionType) {
        this.action = action;
            
        return this;
    }

    setFallAction(action: ActionType) {
        this.action = action;
            
        return this;
    }

    setChance(value: number) {
        this.chance = value;

        return this;
    }
}