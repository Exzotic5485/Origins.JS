import { Identifier } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class PlaySoundAction extends BaseEntityAction {
    private sound!: Identifier;
    private volume: number = 1.0;
    private pitch: number = 1.0;


    constructor() {
        super()
        this.type = "origins:play_sound";
    }

    

    setSound(value: Identifier) {
        this.sound = value;
            
        return this;
    }

    setVolume(value: number) {
        this.volume = value;
            
        return this;
    }

    setPitch(value: number) {
        this.pitch = value;
            
        return this;
    }
}