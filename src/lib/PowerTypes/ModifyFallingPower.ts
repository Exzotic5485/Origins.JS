import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class ModifyFallingPower extends BasePower {
    public velocity!: number;
    public take_fall_damage: boolean = true;


    constructor(options: PowerOptions) {
        super(options)

        this.type = "origins:modify_falling";
    }

    

    setVelocity(value: number) {
        this.velocity = value;
            
        return this;
    }

    setTakeFallDamage(value: boolean) {
        this.take_fall_damage = value;
            
        return this;
    }
}