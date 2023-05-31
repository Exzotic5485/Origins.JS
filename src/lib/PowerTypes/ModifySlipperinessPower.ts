import { PowerOptions, BlockConditionType, AttributeModifier, ArrayOfAttributeModifiers } from "../Types";
import BasePower from "./BasePower";

export default class ModifySlipperinessPower extends BasePower {
    private block_condition?: BlockConditionType;
    private modifier?: AttributeModifier;
    private modifiers?: ArrayOfAttributeModifiers;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:modify_slipperiness";
    }

    

    setBlockCondition(value: BlockConditionType) {
        this.block_condition = value;
            
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