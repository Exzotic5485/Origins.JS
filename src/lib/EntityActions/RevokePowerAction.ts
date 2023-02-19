import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class RevokePowerAction extends BaseEntityAction {
    public power!: Identifier;
    public source!: Identifier;


    constructor() {
        super()
        this.type = "origins:revoke_power";
    }

    

    setPower(value: Identifier) {
        this.power = value;
            
        return this;
    }

    setSource(value: Identifier) {
        this.source = value;
            
        return this;
    }
}