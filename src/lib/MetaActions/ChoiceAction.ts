import { ChoiceMetActionAction } from "../Types";
import BaseMetaAction from "./BaseMetaAction";

export default class ChoiceAction extends BaseMetaAction {
    private actions: ChoiceMetActionAction[];

    constructor() {
        super()
        this.type = "origins:choice";
        this.actions = [];
    }

    add(...params: ChoiceMetActionAction[]) {
        this.actions.push(...params);
            
        return this;
    }
}