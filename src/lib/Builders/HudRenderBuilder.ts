import { EntityConditionType, HudRender, Identifier } from "../Types";

export default class HudRenderBuilder implements HudRender {
    should_render?: boolean;
    sprite_location?: Identifier;
    bar_index?: number;
    condition?: EntityConditionType;
    inverted?: boolean;

    private constructor() {

    }

    setShouldRender(value: boolean) {
        this.should_render = value;
            
        return this;
    }

    setSpriteLocation(value: Identifier) {
        this.sprite_location = value;
            
        return this;
    }

    setBarIndex(value: number) {
        this.bar_index = value;
            
        return this;
    }

    setCondition(value: EntityConditionType) {
        this.condition = value;
            
        return this;
    }

    setInverted(value: boolean) {
        this.inverted = value;
            
        return this;
    }
}