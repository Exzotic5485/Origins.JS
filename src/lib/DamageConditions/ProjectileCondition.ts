import { Identifier } from "../Types";
import BaseDamageCondition from "./BaseDamageCondition";

export default class ProjectileCondition extends BaseDamageCondition {
    private projectile?: Identifier;


    constructor() {
        super()
        this.type = "origins:projectile";
    }

    

    setProjectile(value: Identifier) {
        this.projectile = value;
            
        return this;
    }
}