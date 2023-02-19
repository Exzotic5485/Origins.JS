import { Identifier, EntityActionType } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class SpawnEntityAction extends BaseEntityAction {
    public entity_type!: Identifier;
    public tag?: string;
    public entity_action?: EntityActionType;


    constructor() {
        super()
        this.type = "origins:spawn_entity";
    }

    

    setEntityType(value: Identifier) {
        this.entity_type = value;
            
        return this;
    }

    setTag(value: string) {
        this.tag = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }
}