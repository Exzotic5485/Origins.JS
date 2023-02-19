import {  } from "../Types";
import BaseEntityAction from "./BaseEntityAction";

export default class AddVelocityAction extends BaseEntityAction {
    public x: number = 0.0;
    public y: number = 0.0;
    public z: number = 0.0;
    public space: string = "world";
    public client: boolean = true;
    public server: boolean = true;
    public set: boolean = false;


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