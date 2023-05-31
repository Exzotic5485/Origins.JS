import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class ModifyPlayerSpawnPower extends BasePower {
    private dimension!: Identifier;
    private biome?: Identifier;
    private structure?: Identifier;
    private spawn_strategy: string = "default";
    private dimension_distance_multiplier?: number;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_player_spawn";
    }

    

    setDimension(value: Identifier) {
        this.dimension = value;
            
        return this;
    }

    setBiome(value: Identifier) {
        this.biome = value;
            
        return this;
    }

    setStructure(value: Identifier) {
        this.structure = value;
            
        return this;
    }

    setSpawnStrategy(value: string) {
        this.spawn_strategy = value;
            
        return this;
    }

    setDimensionDistanceMultiplier(value: number) {
        this.dimension_distance_multiplier = value;
            
        return this;
    }
}