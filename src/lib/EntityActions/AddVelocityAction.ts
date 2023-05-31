import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class AddVelocityAction extends BaseEntityAction {
    private x: number = 0.0;
    private y: number = 0.0;
    private z: number = 0.0;
    private space: string = "world";
    private client: boolean = true;
    private server: boolean = true;
    private set: boolean = false;


    constructor() {
        super()
        this.type = "origins:add_velocity";
    }

    

    setX(value: number) {
        this.x = value;
            
        return this;
    }

    setY(value: number) {
        this.y = value;
            
        return this;
    }

    setZ(value: number) {
        this.z = value;
            
        return this;
    }

    setSpace(value: string) {
        this.space = value;
            
        return this;
    }

    setClient(value: boolean) {
        this.client = value;
            
        return this;
    }

    setServer(value: boolean) {
        this.server = value;
            
        return this;
    }

    setSet(value: boolean) {
        this.set = value;
            
        return this;
    }
}