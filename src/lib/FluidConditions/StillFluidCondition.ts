import EmptyFluidCondition from "./EmptyFluidCondition";

export default class StillFluidCondition extends EmptyFluidCondition {
    constructor() {
        super()
        
        this.type = "origins:still";
    }
}