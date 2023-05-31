export default class BaseBientityCondition {
    private type: string;
    private inverted?: boolean;

    constructor() {
        this.type = "";
    }

    setInverted(value: boolean) {
        this.inverted = value;

        return this;
    }
}