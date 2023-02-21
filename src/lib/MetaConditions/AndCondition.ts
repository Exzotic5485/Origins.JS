export default class AndCondition {
    public type: string;
    public conditions: any[];

    constructor() {
        this.type = "origins:and";
        this.conditions = [];
    }

    add(...params: any[]) {
        this.conditions.push(...params);
            
        return this;
    }
}