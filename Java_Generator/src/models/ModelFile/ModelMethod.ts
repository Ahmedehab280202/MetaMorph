import MethodNode from "metamorph-lib/Backend Standardization TS/dist/models/MethodNode";

export default class ModelMethod{
    public dtype: String;
    public name: String;


    constructor(method_node: MethodNode){
        this.dtype=method_node.dtype;
        this.name=method_node.name;
    }
    toString(){
      return([
        `    public ${this.dtype} ${this.name}() {`,
        `      // Implement here...`,
        `    }`
      ].join('\n'))
    }
}