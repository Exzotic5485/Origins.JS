import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class ModifyCameraSubmersionPower extends BasePower {
    private from?: string;
    private to!: string;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_camera_submersion";
    }

    

    setFrom(value: string) {
        this.from = value;
            
        return this;
    }

    setTo(value: string) {
        this.to = value;
            
        return this;
    }
}