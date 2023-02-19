import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class StatusBarTexturePower extends BasePower {
    public texture!: Identifier;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:status_bar_texture";
    }

    

    setTexture(value: Identifier) {
        this.texture = value;
            
        return this;
    }
}