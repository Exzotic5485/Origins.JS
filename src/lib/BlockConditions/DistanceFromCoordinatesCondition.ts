import { Vector, Comparison } from "../Types";
import BaseBlockAction from "./BaseBlockCondition";

export default class DistanceFromCoordinatesCondition extends BaseBlockAction {
    public reference: string = "world_origin";
    public offset?: Vector;
    public ignore_x: boolean = false;
    public ignore_y: boolean = false;
    public ignore_z: boolean = false;
    public shape: string = "cube";
    public scale_reference_to_dimension: boolean = true;
    public result_on_the_wrong_dimension?: boolean;
    public round_to_digit?: number;
    public comparison!: Comparison;
    public compare_to!: number;


    constructor() {
        super()
        this.type = "origins:distance_from_coordinates";
    }

    

    setReference(value: string) {
        this.reference = value;
            
        return this;
    }

    setOffset(value: Vector) {
        this.offset = value;
            
        return this;
    }

    setIgnoreX(value: boolean) {
        this.ignore_x = value;
            
        return this;
    }

    setIgnoreY(value: boolean) {
        this.ignore_y = value;
            
        return this;
    }

    setIgnoreZ(value: boolean) {
        this.ignore_z = value;
            
        return this;
    }

    setShape(value: string) {
        this.shape = value;
            
        return this;
    }

    setScaleReferenceToDimension(value: boolean) {
        this.scale_reference_to_dimension = value;
            
        return this;
    }

    setResultOnTheWrongDimension(value: boolean) {
        this.result_on_the_wrong_dimension = value;
            
        return this;
    }

    setRoundToDigit(value: number) {
        this.round_to_digit = value;
            
        return this;
    }

    setComparison(value: Comparison) {
        this.comparison = value;
            
        return this;
    }

    setCompareTo(value: number) {
        this.compare_to = value;
            
        return this;
    }
}