import { AttributeModifier, AttributeModifierOperation, Identifier } from "../Types";

export default class AttributeModifierBuilder implements AttributeModifier {
    operation!: AttributeModifierOperation;
    value!: number;
    resource?: Identifier;
    name?: string;
    modifier?: AttributeModifier;
    
    constructor() {}

    setOperation(value: AttributeModifierOperation) {
        this.operation = value;

        return this;
    }

    setValue(value: number) {
        this.value = value;

        return this;
    }

    setResource(value: Identifier) {
        this.resource = value;

        return this;
    }

    setName(value: string) {
        this.name = value;

        return this;
    }

    setModifier(value: AttributeModifier) {
        this.modifier = value;

        return this;
    }
}