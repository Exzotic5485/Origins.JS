import { PowerOptions, ItemConditionType, TextComponent } from "../Types";
import BasePower from "./BasePower";

export default class TooltipPower extends BasePower {
    private item_condition?: ItemConditionType;
    private text?: TextComponent;
    private texts?: TextComponent[];
    private priority: number = 0;


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:tooltip";
    }

    setItemCondition(value: ItemConditionType) {
        this.item_condition = value;
            
        return this;
    }

    setText(value: TextComponent) {
        this.text = value;
            
        return this;
    }

    setTexts(value: TextComponent[]) {
        this.texts = value;
            
        return this;
    }

    setPriority(value: number) {
        this.priority = value;
            
        return this;
    }
}