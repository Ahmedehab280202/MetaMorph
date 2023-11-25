class TextNode extends BaseNode {
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
}