import { StatusEffectInstance, ArrayOfStatusEffectInstances } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class SpawnEffectCloudAction extends BaseEntityAction {
    private radius: number = 3.0;
    private radius_on_use: number = -0.5;
    private wait_time: number = 10;
    private effect?: StatusEffectInstance;
    private effects?: ArrayOfStatusEffectInstances;


    constructor() {
        super()
        this.type = "origins:spawn_effect_cloud";
    }

    

    setRadius(value: number) {
        this.radius = value;
            
        return this;
    }

    setRadiusOnUse(value: number) {
        this.radius_on_use = value;
            
        return this;
    }

    setWaitTime(value: number) {
        this.wait_time = value;
            
        return this;
    }

    setEffect(value: StatusEffectInstance) {
        this.effect = value;
            
        return this;
    }

    setEffects(value: ArrayOfStatusEffectInstances) {
        this.effects = value;
            
        return this;
    }
}