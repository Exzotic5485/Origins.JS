import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class ElytraFlightPossibleCondition extends BaseEntityAction {
    public check_state: boolean = false;
    public check_abilities: boolean = true;


    constructor() {
        super()
        this.type = "origins:elytra_flight_possible";
    }

    

    setCheckState(value: boolean) {
        this.check_state = value;
            
        return this;
    }

    setCheckAbilities(value: boolean) {
        this.check_abilities = value;
            
        return this;
    }
}