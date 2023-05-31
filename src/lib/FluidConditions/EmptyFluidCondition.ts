import { Identifier } from "../Types";

export default class EmptyFluidCondition {
    public type: Identifier;
    private inverted?: boolean;

    constructor() {
        this.type = "origins:empty";
    }

    setInverted(value: boolean) {
        this.inverted = value;

        return this;
    }
}