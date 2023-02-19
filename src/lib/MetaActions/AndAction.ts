export default class AndAction {
    public type: string;
    public actions: any[];

    constructor() {
        this.type = "origins:and";
        this.actions = [];
    }

    // Using "any" for now
    addAction(action: any) {
        this.actions.push(action);
            
        return this;
    }

    addActions(...params: any[]) {
        this.actions.push(...params);
            
        return this;
    }
}