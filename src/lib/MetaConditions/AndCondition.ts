export default class AndCondition {
    private type: string;
    private conditions: any[];
    private inverted?: boolean;

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