import { DestructionType, BlockConditionType } from "../Types";
import BaseBlockAction from "./BaseBlockAction";

export default class ExplodeAction extends BaseBlockAction {
    public power!: number;
    public destruction_type: DestructionType = "break";
    public indestructible?: BlockConditionType;
    public destructible?: BlockConditionType;
    public create_fire: boolean = false;


    constructor() {
        super()
        this.type = "origins:explode";
    }

    

    setPower(value: number) {
        this.power = value;
            
        return this;
    }

    setDestructionType(value: DestructionType) {
        this.destruction_type = value;
            
        return this;
    }

    setIndestructible(value: BlockConditionType) {
        this.indestructible = value;
            
        return this;
    }

    setDestructible(value: BlockConditionType) {
        this.destructible = value;
            
        return this;
    }

    setCreateFire(value: boolean) {
        this.create_fire = value;
            
        return this;
    }
}