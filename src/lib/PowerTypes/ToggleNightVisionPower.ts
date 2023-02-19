import { PowerOptions, Key } from "../Types";
import BasePower from "./BasePower";

export default class ToggleNightVisionPower extends BasePower {
    public active_by_default: boolean = true;
    public strength: number = 1.0;
    public key?: Key;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:toggle_night_vision";
    }

    

    setActiveByDefault(value: boolean) {
        this.active_by_default = value;
            
        return this;
    }

    setStrength(value: number) {
        this.strength = value;
            
        return this;
    }

    setKey(value: Key) {
        this.key = value;
            
        return this;
    }
}