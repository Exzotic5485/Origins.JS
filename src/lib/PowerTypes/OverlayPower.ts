import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class OverlayPower extends BasePower {
    public texture!: Identifier;
    public strength: number = 1.0;
    public red: number = 1.0 ;
    public green: number = 1.0;
    public blue: number = 1.0;
    public draw_mode!: string;
    public draw_phase!: string;
    public hide_with_hud: boolean = true;
    public visible_in_third_person: boolean = false;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:overlay";
    }

    

    setTexture(value: Identifier) {
        this.texture = value;
            
        return this;
    }

    setStrength(value: number) {
        this.strength = value;
            
        return this;
    }

    setRed(value: number) {
        this.red = value;
            
        return this;
    }

    setGreen(value: number) {
        this.green = value;
            
        return this;
    }

    setBlue(value: number) {
        this.blue = value;
            
        return this;
    }

    setDrawMode(value: string) {
        this.draw_mode = value;
            
        return this;
    }

    setDrawPhase(value: string) {
        this.draw_phase = value;
            
        return this;
    }

    setHideWithHud(value: boolean) {
        this.hide_with_hud = value;
            
        return this;
    }

    setVisibleInThirdPerson(value: boolean) {
        this.visible_in_third_person = value;
            
        return this;
    }
}