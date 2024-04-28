import { LucidCsv, NodeType } from "../types"
import ConstructionNode from "./ConstructionNode"
import DeclarationNode from "./DeclarationNode"
import MethodNode from "./MethodNode"
import PropNode from "./PropNode"
import RelationshipNode from "./RelationshipNode"

export default class ClassNode {
  public id: String
  public type: NodeType
  public name: String
  public declaration: DeclarationNode
  public construction: ConstructionNode
  public parent_node: ClassNode | null
  public prop_nodes: PropNode[]
  public method_nodes: MethodNode[]
  public relationships: RelationshipNode[]

  constructor(lucid_node: LucidCsv) {
    this.id = lucid_node.Id
    this.type = (
      lucid_node["Text Area 1"].includes("<<Interface>>")
      ? 'interface'
      : 'class'
    )
    this.name = (
      this.type == "interface"
      ? lucid_node["Text Area 1"].replace("<<Interface>>", "").trim()
      : lucid_node["Text Area 1"].trim()
    )
    this.declaration = new DeclarationNode('public',this.type,this.name)
    this.prop_nodes = (
      this.newLineSlicer(lucid_node["Text Area 2"])
        .map(prop_string => new PropNode(prop_string))
    )
    this.construction = new ConstructionNode('public',this.name,this.prop_nodes)
    this.method_nodes = (
      this.newLineSlicer(lucid_node["Text Area 3"])
        .map(method_string => new MethodNode(method_string))
    )
    this.parent_node = null
    this.relationships = []
  }

  newLineSlicer(inputString: String): String[] {
    const pattern = /(?:[\u200b\n])(.*?)(?=\n|$)/g;
    const matches = inputString.match(pattern) || [];
    return matches;
  }

  setParentNode(parent_node: ClassNode){
    this.parent_node = parent_node
    this.declaration.setParentNode(parent_node)
  }

  updateConstructor(){
    this.construction.setRelationships(this.relationships,this.parent_node)
  }
}