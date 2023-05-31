import BaseMetaAction from "./BaseMetaAction";

export default class NothingAction extends BaseMetaAction {
    constructor() {
        super()
        this.type = "origins:nothing";
    }
}