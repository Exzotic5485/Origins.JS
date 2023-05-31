import Datapack from "../Datapack";
import AndCondition from "../MetaConditions/AndCondition";
import { ConditionType, Identifier, PowerOptions } from "../Types";
import { createUniqueName } from "../utils/createUniqueName";

export default class BasePower {
    name?: string;
    description?: string;
    hidden?: boolean;
    type: Identifier;
    condition?: ConditionType;

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
        return `${Datapack.namespace}:${this.getFileName()}` as Identifier;
    }

    getFileName() {
        if(this.fileName) return this.fileName;

        const newFileName = createUniqueName(this.type, this.name);

        this.fileName = newFileName;
        return newFileName;
    }

    addCondition(condition: ConditionType) {
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

    setCondition(condition: ConditionType) {
        this.condition = condition;

        return this;
    }
}