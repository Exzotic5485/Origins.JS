import Datapack from "../Datapack";
import BaseEntityCondition from "../EntityConditions/BaseEntityCondition";
import AndCondition from "../MetaConditions/AndCondition";
import { Identifier, PowerOptions } from "../Types";
import { createUniqueName } from "../utils/UniqueFilename";

export default class BasePower {
    name?: string;
    description?: string;
    hidden?: boolean;
    type: Identifier;
    condition?: BaseEntityCondition;

    private fileName?: string;

    constructor(options?: PowerOptions) {
        this.name = options?.name
        this.description = options?.description
        this.hidden = options?.hidden

        this.type = "origins:simple"
    }

    setName(value: string) {
        this.name = value
        
        return this;
    }

    setDescription(value: string) {
        this.description = value

        return this;
    }

    setHidden(value: boolean) {
        this.hidden = value

        return this;
    }

    getReference() {
        return `${Datapack.namespace}:${this.getFileName()}`
    }

    getFileName() {
        if(this.fileName) return this.fileName;

        const newFileName = createUniqueName(this.type, this.name);

        this.fileName = newFileName;
        return newFileName;
    }

    addCondition(condition: BaseEntityCondition) {
        if(!this.condition) {
            this.condition = condition

            return this;
        }

        if(this.condition instanceof AndCondition) {
            this.condition.add(condition)

            return this;
        }

        const newCondition = new AndCondition()
        .add(this.condition, condition);

        this.condition = newCondition

        return this;
    }

    /*
    addConditions(conditions) {
        for (let condition of conditions) {
            this.addCondition(condition)
        }

        return this;
    }
    */
}