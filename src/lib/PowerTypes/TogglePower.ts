import { PowerOptions, Key } from "../Types";
import BasePower from "./BasePower";

export default class TogglePower extends BasePower {
    private active_by_default: boolean = true;
    private key: Key = {"key": "key.origins.primary_active"};
    private retain_state: boolean = true;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:toggle";
    }

    

    setActiveByDefault(value: boolean) {
        this.active_by_default = value;
            
        return this;
    }

    setKey(value: Key) {
        this.key = value;
            
        return this;
    }

    setRetainState(value: boolean) {
        this.retain_state = value;
            
        return this;
    }
}