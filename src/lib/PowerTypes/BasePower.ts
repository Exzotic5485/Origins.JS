import { Identifier, PowerOptions } from "../Types";

export default class BasePower {
    name?: string;
    description?: string;
    hidden?: boolean;
    type: Identifier;

    constructor(options: PowerOptions) {
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


    /*
    addCondition(condition) {
        if(!this.condition) {
            this.condition = condition

            return this;
        }

        if(this.condition.type == "origins:and") {
            console.log("2")
            this.condition.actions.push(condition)

            return this;
        }

        let newCondition = {
            type: "origins:and",
            actions: []
        }

        newCondition.actions.push(this.condition)
        newCondition.actions.push(condition)

        this.condition = newCondition

        return this;
    }

    addConditions(conditions) {
        for (let condition of conditions) {
            this.addCondition(condition)
        }

        return this;
    }

    getFileName() {
        if(this?.name) return this.name.toLowerCase().replace(/\s+/g, "-");

        if(!this?.filename) return this.filename = this.type.split(":").pop() + Math.floor(Math.random() * 1000);

        return this.filename;
    }
    */
}