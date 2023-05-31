import BaseMetaCondition from "./BaseMetaCondition";

export default class ConstantCondition extends BaseMetaCondition {
    private value!: boolean;

    constructor() {
        super()
        this.type = "origins:constant";
    }

    setValue(value: boolean) {
        this.value = value;

        return this;
    }
}