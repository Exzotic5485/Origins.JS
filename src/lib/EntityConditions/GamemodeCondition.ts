import {  } from "../Types";
import BaseEntityAction from "./BaseEntityCondition";

export default class GamemodeCondition extends BaseEntityAction {
    private gamemode!: string;


    constructor() {
        super()
        this.type = "origins:gamemode";
    }

    

    setGamemode(value: string) {
        this.gamemode = value;
            
        return this;
    }
}