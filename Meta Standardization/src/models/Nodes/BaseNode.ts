class BaseNode {
  readonly id : string
  readonly name : string
  readonly api : ApiName
  readonly children : ChildrenNodes
 
  readonly box : BoxModel
  readonly layout : Layout
  readonly design : Design

  constructor(
    id : string,
    name : string,
    api : ApiName,
    children : ChildrenNodes,
    box : BoxModel,
    layout : Layout,
    design : Design
  ){
    this.id = id
    this.name = name
    this.api = api
    this.children = children
    this.box = box
    this.layout = layout
    this.design = design
  }
}