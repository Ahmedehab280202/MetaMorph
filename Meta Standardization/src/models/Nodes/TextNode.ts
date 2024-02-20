/* import BoxModel from "../BoxModel/BoxModel"
import Design from "../Design/Design"
import Layout from "../Layout/Layout"
import { NodeType } from "../types"
import ApiType from "./ApiType"
import BaseNode from "./BaseNode"
import ChildrenNodes from "./ChildrenNodes"

export default class TextNode extends BaseNode {
  readonly nodeType : NodeType = 'TEXT'
  readonly typography : Typography

  constructor(
    id : string,
    name : string,
    apiType : ApiType,
    children : ChildrenNodes,
    box : BoxModel,
    layout : Layout,
    design : Design,
    typography : Typography
  ){
    super(
      id = id,
      name = name,
      apiType = apiType,
      children = children,
      box = box,
      layout = layout,
      design = design,
    )

    this.typography = typography
  }
} */