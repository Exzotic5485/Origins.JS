import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class ModelColorPower extends BasePower {
    public red: number = 1.0;
    public green: number = 1.0;
    public blue: number = 1.0;
    public alpha: number = 1.0;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:model_color";
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

    setAlpha(value: number) {
        this.alpha = value;
            
        return this;
    }
}