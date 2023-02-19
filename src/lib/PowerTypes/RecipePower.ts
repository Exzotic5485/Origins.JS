import { PowerOptions, CraftingRecipe } from "../Types";
import BasePower from "./BasePower";

export default class RecipePower extends BasePower {
    public recipe!: CraftingRecipe;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:recipe";
    }

    

    setRecipe(value: CraftingRecipe) {
        this.recipe = value;
            
        return this;
    }
}