import { PowerOptions } from "../Types";
import BasePower from "./BasePower";

export default class EntityGroupPower extends BasePower {
    public group!: string;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:entity_group";
    }

    

    setGroup(value: string) {
        this.group = value;
            
        return this;
    }
}