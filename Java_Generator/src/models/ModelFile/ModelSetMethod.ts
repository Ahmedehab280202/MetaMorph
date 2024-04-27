import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";

export default class ModelSetMethod{
    private dtype: String;
    private name: String;

    constructor(prop_node:PropNode){
        this.dtype=prop_node.dtype;
        this.name=prop_node.name;
    }
    toString(){
        return (
            `    public void set${this.name.charAt(0).toUpperCase() + this.name.slice(1)}(${this.dtype} ${this.name}) {\n`+
            `      this.${this.name} = ${this.name};\n`+
            `    }\n`
        )
    }
}