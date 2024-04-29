import MethodNode from "metamorph-lib/Backend Standardization TS/dist/models/MethodNode";

export default class ModelMethod{
    public dtype: String;
    public name: String;
    public override: Boolean

    constructor(method_node: MethodNode, parent_methods: MethodNode[]){
        this.dtype=method_node.dtype;
        this.name=method_node.name;
        this.override= parent_methods.some(method => method.name === this.name && method.dtype === this.dtype)
    }
    toString(){
      return([
        `    ${this.override ? '@Override' : ''}`,
        `    public ${this.dtype || 'void'} ${this.name}() {`,
        `      // Implement here...`,
        `    }`
      ].join('\n'))
    }
}