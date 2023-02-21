import { PowerOptions, ItemConditionType, TextComponent } from "../Types";
import BasePower from "./BasePower";

export default class TooltipPower extends BasePower {
    public item_condition?: ItemConditionType;
    public text?: TextComponent;
    public texts?: TextComponent[];
    public priority: number = 0;


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