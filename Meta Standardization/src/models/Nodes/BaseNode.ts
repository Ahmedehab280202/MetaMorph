import { ElementType } from "../../types/types"
import BoxModel from "../BoxModel/BoxModel"
import Design from "../Design/Design"
import Layout from "../Layout/Layout"
import ChildrenNodes from "./ChildrenNodes"

export default class BaseNode {
  readonly id : string
  readonly name : string
  readonly element_type: ElementType
  readonly data_entity: string | null

  readonly children : Array<BaseNode>
 
  readonly box : BoxModel
  readonly layout : Layout
  readonly design : Design

  constructor(
    id : string,
    name : string,
    element_type : ElementType,
    data_entity : string | null,
    children : Array<BaseNode>,
    box : BoxModel,
    layout : Layout,
    design : Design
  ){
    this.id = id
    this.name = name
    this.element_type = element_type
    this.data_entity = data_entity
    this.children = children
    this.box = box
    this.layout = layout
    this.design = design
  }

}