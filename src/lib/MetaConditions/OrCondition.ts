import { ConditionType } from "../Types";
import BaseMetaCondition from "./BaseMetaCondition";

export default class OrCondition extends BaseMetaCondition {
    public type: string;
    private conditions: ConditionType[];
    private inverted?: boolean;

    constructor() {
        super()
        this.type = "origins:or";
        this.conditions = [];
    }

    add(...params: ConditionType[]) {
        this.conditions.push(...params);
            
        return this;
    }

    setInverted(value: boolean) {
        this.inverted = value;

        return this;
    }
}