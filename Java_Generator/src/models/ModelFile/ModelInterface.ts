import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode"
import MethodNode from "metamorph-lib/Backend Standardization TS/dist/models/MethodNode"

export default class ModelInterface{
  private name: String
  private method_nodes: MethodNode[]

  constructor(name: String, method_nodes: MethodNode[]){
    this.name = name
    this.method_nodes = method_nodes
  }

  toString(){
    return [
      `package com.meta.${this.name.toLowerCase()};`,
      ``,
      `public interface ${this.name}{`,
      `   ${this.method_nodes.map(method => `${method.dtype || 'void'} ${method.name}();`).join(`\n`)}`,
      `}`
    ].join('\n')
  }
}