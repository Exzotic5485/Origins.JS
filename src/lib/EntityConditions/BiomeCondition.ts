import { Identifier, ArrayOfIdentifiers, BiomeConditionType } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class BiomeCondition extends BaseEntityAction {
    public biome?: Identifier;
    public biomes?: ArrayOfIdentifiers;
    public condition?: BiomeConditionType;


    constructor() {
        super()
        this.type = "origins:biome";
    }

    

    setBiome(value: Identifier) {
        this.biome = value;
            
        return this;
    }

    setBiomes(value: ArrayOfIdentifiers) {
        this.biomes = value;
            
        return this;
    }

    setCondition(value: BiomeConditionType) {
        this.condition = value;
            
        return this;
    }
}