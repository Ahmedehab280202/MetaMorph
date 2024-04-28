import ConstructionNode from "metamorph-lib/Backend Standardization TS/dist/models/ConstructionNode";
import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";
import { AccessModifier } from "metamorph-lib/Backend Standardization TS/dist/types";

export default class ModelConstructor{
    public modifier: AccessModifier;
    public name: String;
    public param_nodes: PropNode[];
    public init_nodes: PropNode[];
    public parent_nodes: PropNode[];
    public composite_nodes: PropNode[]

    constructor(constrcut_node: ConstructionNode){
      this.modifier = constrcut_node.modifier
      this.name = constrcut_node.name
      this.param_nodes = constrcut_node.param_nodes
      this.parent_nodes = constrcut_node.parent_nodes
      this.init_nodes = constrcut_node.init_nodes
      this.composite_nodes = []
      console.log(this.name);
      /* this.composite_nodes = constrcut_node.init_nodes.filter(node => !constrcut_node.param_nodes.includes(node)) */
    }
    toString(){

        
        return (
          [
            `    public ${this.name}() {`,
            `    }`
          ].join('\n')
          +
          (
            this.init_nodes.length != 0 ?
            [
              `    ${this.modifier} ${this.name}(${this.param_nodes.map(node => `${node.dtype} ${node.name}`).join(', ')})  {`,
              `      ${this.parent_nodes.length != 0 ? `super(${this.parent_nodes.map(prop => `${prop.name}`).join(',')})` : ''}`,
              `      ${this.init_nodes.map(prop => `this.${prop.name} = ${prop.name}`).join('\n      ')}`,
              `      ${this.composite_nodes.map(node => `this.${node.name} = new ${node.dtype}()`).join('\n      ')}`,
              `    }`
            ].join('\n')
            : ''
          )
        )
    }
}