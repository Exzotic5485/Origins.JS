import { IfElseListMetaActionAction } from "../Types";
import BaseMetaAction from "./BaseMetaAction";

export default class IfElseListAction extends BaseMetaAction {
    private actions: IfElseListMetaActionAction[];

    constructor() {
        super()
        this.type = "origins:if_else_list";
        this.actions = [];
    }

    add(...params: IfElseListMetaActionAction[]) {
        this.actions.push(...params);
            
        return this;
    }
}