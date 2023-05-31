import { PowerOptions, AttributeModifier, ArrayOfAttributeModifiers, EntityActionType } from "../Types";
import BasePower from "./BasePower";

export default class ModifyJumpPower extends BasePower {
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;
    private entity_action?: EntityActionType;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_jump";
    }

    

    setModifier(value: AttributeModifier) {
        this.modifier = value;
            
        return this;
    }

    setModifiers(value: ArrayOfAttributeModifiers) {
        this.modifiers = value;
            
        return this;
    }

    setEntityAction(value: EntityActionType) {
        this.entity_action = value;
            
        return this;
    }
}