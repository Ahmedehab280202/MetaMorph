import { AccessModifier, NodeExtension, NodeType } from "../types"
import ClassNode from "./ClassNode"

export default class DeclarationNode {
  public access: AccessModifier
  public type: NodeType
  public name: String
  public parent_name: String | null
  public parent_type: NodeType | null
  public extension: NodeExtension | ''

  constructor(access: AccessModifier, type: NodeType, name: String) {
    this.access = access
    this.type = type
    this.name = name
    this.parent_name = null
    this.parent_type = null
    this.extension = ''
  }

  setParentNode(parent_node: ClassNode){
    this.parent_name = parent_node.name
    this.parent_type = parent_node.type
    this.extension = (
      this.parent_type == 'interface'
      ? 'implements'
      : 'extends'
    )
  }
}