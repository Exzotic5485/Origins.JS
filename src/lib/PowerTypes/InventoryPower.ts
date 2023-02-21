import { PowerOptions, ContainerType, ItemConditionType, Key } from "../Types";
import BasePower from "./BasePower";

export default class InventoryPower extends BasePower {
    public title: string = "container.inventory";
    public container_type: ContainerType = "dropper";
    public drop_on_death: boolean = false;
    public drop_on_death_filter?: ItemConditionType;
    public recoverable: boolean = true;
    public key: Key = {"key": "key.origins.primary_active"};


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:inventory";
    }

    

    setTitle(value: string) {
        this.title = value;
            
        return this;
    }

    setContainerType(value: ContainerType) {
        this.container_type = value;
            
        return this;
    }

    setDropOnDeath(value: boolean) {
        this.drop_on_death = value;
            
        return this;
    }

    setDropOnDeathFilter(value: ItemConditionType) {
        this.drop_on_death_filter = value;
            
        return this;
    }

    setRecoverable(value: boolean) {
        this.recoverable = value;
            
        return this;
    }

    setKey(value: Key) {
        this.key = value;
            
        return this;
    }
}