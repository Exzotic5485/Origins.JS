import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class ElytraFlightPower extends BasePower {
    private render_elytra!: boolean;
    private texture_location?: Identifier;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:elytra_flight";
    }

    

    setRenderElytra(value: boolean) {
        this.render_elytra = value;
            
        return this;
    }

    setTextureLocation(value: Identifier) {
        this.texture_location = value;
            
        return this;
    }
}