import { BientityActionType } from "../Types";
import BaseBientityAction from "./BaseBientityAction";

export default class InvertAction extends BaseBientityAction {
    private action!: BientityActionType;


    constructor() {
        super()
        this.type = "origins:invert";
    }

    

    setAction(value: BientityActionType) {
        this.action = value;
            
        return this;
    }
}