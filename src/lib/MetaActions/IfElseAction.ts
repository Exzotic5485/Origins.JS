import AndCondition from "../MetaConditions/AndCondition";
import { ActionType, ConditionType } from "../Types";
import BaseMetaAction from "./BaseMetaAction";

export default class IfElseAction extends BaseMetaAction {
    private condition!: ConditionType;
    private if_action!: ActionType;
    private else_action?: ActionType;

    constructor() {
        super();
        this.type = "origins:if_else";
    }

    addCondition(condition: ConditionType) {
        if (!this.condition) {
            this.condition = condition;

            return this;
        }

        if (this.condition instanceof AndCondition) {
            this.condition.add(condition);

            return this;
        }

        const newCondition = new AndCondition().add(this.condition, condition);

        this.condition = newCondition;

        return this;
    }

    setCondition(condition: ConditionType) {
        this.condition = condition;

        return this;
    }

    setIfAction(action: ActionType) {
        this.if_action = action;

        return this;
    }

    setElseAction(action: ActionType) {
        this.else_action = action;

        return this;
    }
}
