import { Identifier, OriginIcon, PowerType } from "./Types";

interface OriginOptions {
    name?: string,
    description?: string,
    icon?: OriginIcon,
    impact?: number
}

export default class Origin {

    name?: string;
    description?: string;
    icon?: OriginIcon;
    impact?: number;
    powers: PowerType[];
    powerReferences: Identifier[];
    order?: number;
    unchoosable?: boolean;

    constructor(options?: OriginOptions) {
        this.name = options?.name
        this.description = options?.description
        this.icon = options?.icon
        this.impact = options?.impact

        this.powers = []
        this.powerReferences = []
    }

    addPower(power: PowerType) {
        this.powers.push(power)

        return this;
    }

    addPowerReference(power: Identifier) {
        this.powerReferences.push(power)

        return this;
    }

    addPowerReferences(powers: Identifier[]) {
        for (let power of powers){
            this.addPowerReference(power)
        }

        return this;
    }

    addPowers(powers: PowerType[]) {
        for (let power of powers){
            this.addPower(power)
        }
    }

    setName(value: string) {
        this.name = value

        return this;
    }

    setDescription(value: string) {
        this.description = value

        return this;
    }

    setIcon(value: OriginIcon) {
        this.icon = value

        return this;
    }

    setImpact(value: number) {
        this.impact = value

        return this;
    }

    setUnchoosable(value: boolean) {
        this.unchoosable = value

        return this;
    }

    setOrder(value: number) {
        this.order = value

        return this;
    }

    getNamespace() {
        return this.name ? this.name!.toLowerCase().replace(/\s+/g, "-") : "namespace";
    }

    getPowerReferences() {
        return this.powers.map((p) => p.getReference());
    }
}