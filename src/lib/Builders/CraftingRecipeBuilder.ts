import { CraftingRecipe, Identifier } from "../Types";

export default class CraftingRecipeBuilder implements CraftingRecipe {
    type!: Identifier;
    id!: Identifier;
    result!: {
        item: Identifier;
        count: number;
    };

    private constructor() {}

    setType(value: Identifier) {
        this.type = value;

        return this;
    }

    setId(value: Identifier) {
        this.id = value;

        return this;
    }

    setResult(value: { item: Identifier; count: number }) {
        this.result = value;

        return this;
    }
}
