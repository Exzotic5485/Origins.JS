import { Identifier } from "../Types";

export default class EmptyFluidCondition {
    public type: Identifier;

    constructor() {
        this.type = "origins:empty";
    }
}