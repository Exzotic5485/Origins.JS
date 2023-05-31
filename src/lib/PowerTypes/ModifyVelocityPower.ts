import { PowerOptions, ArrayOfIdentifiers, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

type Axes = "x" | "y" | "z";

export default class ModifyVelocityPower extends BasePower {
    private axes: Axes[] = ["x", "y", "z"];
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;

    constructor(options?: PowerOptions) {
        super(options);

        this.type = "origins:modify_velocity";
    }

    setAxes(value: Axes[]) {
        this.axes = value;

        return this;
    }

    setModifier(value: AttributeModifier) {
        this.modifier = value;

        return this;
    }

    setModifiers(value: ArrayOfAttributeModifiers) {
        this.modifiers = value;

        return this;
    }
}
