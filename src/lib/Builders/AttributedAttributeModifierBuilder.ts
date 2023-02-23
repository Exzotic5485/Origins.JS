import { AttributedAttributeModifier, AttributedAttributeModifierOperation, Identifier } from "../Types";
export default class AttributedAttributeModifierBuilder implements AttributedAttributeModifier {
    attribute!: Identifier;
    operation!: AttributedAttributeModifierOperation;
    value!: number;
    name?: string;

    constructor() {}

    setOperation(value: AttributedAttributeModifierOperation) {
        this.operation = value;

        return this;
    }

    setValue(value: number) {
        this.value = value;

        return this;
    }

    setName(value: string) {
        this.name = value;

        return this;
    }

    setAttribute(value: Identifier) {
        this.attribute = value;

        return this;
    }
}