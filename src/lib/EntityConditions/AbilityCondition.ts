import { PlayerAbility } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class AbilityCondition extends BaseEntityAction {
    public ability!: PlayerAbility;


    constructor() {
        super()
        this.type = "origins:ability";
    }

    

    setAbility(value: PlayerAbility) {
        this.ability = value;
            
        return this;
    }
}