import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";

export default class ModelProp{
    private dtype: String;
    private name: String;
    private modifier: String;
    private default_val:String;

    constructor(prop_node:PropNode){
        this.dtype=prop_node.dtype;
        this.name=prop_node.name;
        this.modifier=prop_node.modifier;
        this.default_val=prop_node.default_val;
    }
    toString(){
        return `${this.modifier} ${this.dtype} ${this.name};\n`
    }
}