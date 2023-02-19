import { PowerOptions, Identifier } from "../Types";
import BasePower from "./BasePower";

export default class ShaderPower extends BasePower {
    public shader!: Identifier;
    public toggleable: boolean = true;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:shader";
    }

    

    setShader(value: Identifier) {
        this.shader = value;
            
        return this;
    }

    setToggleable(value: boolean) {
        this.toggleable = value;
            
        return this;
    }
}