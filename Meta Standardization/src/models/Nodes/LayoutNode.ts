class LayoutNode extends BaseNode {
  readonly nodeType : NodeType = 'LAYOUT'

  constructor(
    id : string,
    name : string,
    apiType : ApiType,
    children : ChildrenNodes,
    box : BoxModel,
    layout : Layout,
    design : Design
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
  }
}