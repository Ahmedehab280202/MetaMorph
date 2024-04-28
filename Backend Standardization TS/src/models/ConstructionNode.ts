import { AccessModifier } from "../types";
import ClassNode from "./ClassNode";
import PropNode from "./PropNode";
import RelationshipNode from "./RelationshipNode";

export default class ConstructionNode{
  public modifier: AccessModifier
  public name: String
  public param_nodes: PropNode[]
  public init_nodes: PropNode[]
  public parent_nodes: PropNode[]

  constructor(modifier: AccessModifier, name: String, prop_nodes: PropNode[]) {
    this.modifier = modifier
    this.name = name
    this.param_nodes = prop_nodes
    this.init_nodes = prop_nodes
    this.parent_nodes = []
  }

  setRelationships(rel_arr: RelationshipNode[], parent_node: ClassNode | null){
    rel_arr.forEach(rel_node => {
      if (rel_node.type == 'Association') {
        this.param_nodes = this.param_nodes.filter(prop_node => !prop_node.dtype.includes(rel_node.class_name as string))
        this.init_nodes = this.init_nodes.filter(init_node => !init_node.dtype.includes(rel_node.class_name as string))
      } else if (rel_node.type == 'Composition') {
        this.param_nodes = this.param_nodes.filter(prop_node => !prop_node.dtype.includes(rel_node.class_name as string))
      }
    })

    if (parent_node && parent_node.type == 'class') {
      this.param_nodes = this.param_nodes.concat(parent_node.prop_nodes)
      this.parent_nodes = this.parent_nodes.concat(parent_node.prop_nodes)
    }
  }
}