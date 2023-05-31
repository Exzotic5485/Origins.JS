import { PowerOptions, BlockConditionType } from "../Types";
import BasePower from "./BasePower";

export default class PreventSleepPower extends BasePower {
    private block_condition?: BlockConditionType;
    private message: string = "origins.cant_sleep";
    private set_spawn_point: boolean = false;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:prevent_sleep";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
        return this;
    }

    setMessage(value: string) {
        this.message = value;
            
        return this;
    }

    setSetSpawnPoint(value: boolean) {
        this.set_spawn_point = value;
            
        return this;
    }
}