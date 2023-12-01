import BoxModel from "../BoxModel/BoxModel"
import Design from "../Design/Design"
import Layout from "../Layout/Layout"
import ApiType from "./ApiType"
import ChildrenNodes from "./ChildrenNodes"

export default class BaseNode {
  readonly id : string
  readonly name : string
  readonly apiType : ApiType
  readonly children : ChildrenNodes
 
  readonly box : BoxModel
  readonly layout : Layout
  readonly design : Design

  constructor(
    id : string,
    name : string,
    apiType : ApiType,
    children : ChildrenNodes,
    box : BoxModel,
    layout : Layout,
    design : Design
  ){
    this.id = id
    this.name = name
    this.apiType = apiType
    this.children = children
    this.box = box
    this.layout = layout
    this.design = design
  }
}