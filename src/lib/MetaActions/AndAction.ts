import { ActionType } from "../Types";

export default class AndAction {
    private type: string;
    private actions: ActionType[];

    constructor() {
        this.type = "origins:and";
        this.actions = [];
    }

    add(...params: ActionType[]) {
        this.actions.push(...params);
            
        return this;
    }
}