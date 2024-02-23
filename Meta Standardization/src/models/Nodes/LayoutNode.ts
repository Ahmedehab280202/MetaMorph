/* import BoxModel from "../BoxModel/BoxModel"
import Design from "../Design/Design"
import Layout from "../Layout/Layout"
import { NodeType } from "../../types/types"
import ApiType from "./ApiType"
import BaseNode from "./BaseNode"
import ChildrenNodes from "./ChildrenNodes"

export default class LayoutNode extends BaseNode {
  readonly nodeType : NodeType = 'LAYOUT'

  constructor(
    id : string,
    name : string,
    children : ChildrenNodes,
    box : BoxModel,
    layout : Layout,
    design : Design
  ){
    super(
      id = id,
      name = name,
      children = children,
      box = box,
      layout = layout,
      design = design,
    )
  }
} */