import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";

export default class ModelGetMethod{
    private dtype: String;
    private name: String;

    constructor(prop_node:PropNode){
        this.dtype=prop_node.dtype;
        this.name=prop_node.name;
    }
    toString(){
        return (
            `    public ${this.dtype} get${this.name.charAt(0).toUpperCase() + this.name.slice(1)}() {\n`+
            `      return ${this.name};\n`+
            `    }\n`
        )
    }
}