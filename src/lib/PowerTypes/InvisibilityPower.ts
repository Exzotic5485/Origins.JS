import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class InvisibilityPower extends BasePower {
    public render_armor!: boolean;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:invisibility";
    }

    

    setRenderArmor(value: boolean) {
        this.render_armor = value;
            
        return this;
    }
}