import { NodeType } from "../../types/types"
import BoxModel from "../BoxModel/BoxModel"
import Design from "../Design/Design"
import Layout from "../Layout/Layout"
import Typography from "../Typography/Typography"
import ChildrenNodes from "./ChildrenNodes"

export default class BaseNode {
  readonly id : string
  readonly name : string
  readonly node_type: NodeType
  readonly element_type: string
  readonly data_entity: string | null

  readonly box : BoxModel
  readonly layout : Layout
  readonly design : Design
  readonly typography : Typography | null
  
  readonly children : Array<BaseNode>

  constructor(
    id : string,
    name : string,
    node_type: NodeType,
    element_type : string,
    data_entity : string | null,
    children : Array<BaseNode>,
    box : BoxModel,
    layout : Layout,
    design : Design,
    typography : Typography | null
  ){
    this.id = id
    this.name = name
    this.node_type = node_type
    this.element_type = element_type
    this.data_entity = data_entity
    this.children = children
    this.box = box
    this.layout = layout
    this.design = design
    this.typography = typography
  }

}