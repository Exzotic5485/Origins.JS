import { ActionType } from "../Types";
import BaseMetaAction from "./BaseMetaAction";

export default class AndAction extends BaseMetaAction {
    private actions: ActionType[];

    constructor() {
        super()
        this.type = "origins:and";
        this.actions = [];
    }

    add(...params: ActionType[]) {
        this.actions.push(...params);
            
        return this;
    }
}