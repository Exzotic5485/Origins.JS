import { BiomeCategory } from "../Types";
import BaseBiomeCondition from "./BaseBiomeCondition";

export default class CategoryCondition extends BaseBiomeCondition {
    public category!: BiomeCategory;


    constructor() {
        super()
        this.type = "origins:category";
    }

    

    setCategory(value: BiomeCategory) {
        this.category = value;
            
        return this;
    }
}