import { Key } from "../Types";

export default class KeyBuilder implements Key {
    key: string;
    continuous?: boolean;

    private constructor(options: Key) {
        this.key = options.key;
        this.continuous = options.continuous;
    }
}