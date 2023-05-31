import { IngredientType } from "../Types";
import BaseItemCondition from "./BaseItemCondition";

export default class IngredientCondition extends BaseItemCondition {
    private ingredient!: IngredientType;


    constructor() {
        super()
        this.type = "origins:ingredient";
    }

    

    setIngredient(value: IngredientType) {
        this.ingredient = value;
            
        return this;
    }
}