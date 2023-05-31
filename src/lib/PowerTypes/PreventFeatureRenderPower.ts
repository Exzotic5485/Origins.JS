import { PowerOptions, FeatureRenderer } from "../Types";
import BasePower from "./BasePower";

export default class PreventFeatureRenderPower extends BasePower {
    private feature?: FeatureRenderer;
    private features?: FeatureRenderer[];


    constructor(options?: PowerOptions) {
        super(options)

        this.type = "origins:prevent_feature_render";
    }

    

    setFeature(value: FeatureRenderer) {
        this.feature = value;
            
        return this;
    }

    setFeatures(value: FeatureRenderer[]) {
        this.features = value;
            
        return this;
    }
}