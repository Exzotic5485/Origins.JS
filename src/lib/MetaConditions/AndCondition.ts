export default class AndCondition {
    public type: string;
    public conditions: any[];
    public inverted?: boolean;

    constructor() {
        this.type = "origins:and";
        this.conditions = [];
    }

    add(...params: any[]) {
        this.conditions.push(...params);
            
        return this;
    }

    setInverted(value: boolean) {
        this.inverted = value;

        return this;
    }
}