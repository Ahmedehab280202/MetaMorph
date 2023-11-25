interface IFactory {
  nodeConstructor(node : Object): BaseNode
  boxConstructor() : BoxModel
  layoutConstructor() : Layout
  designConstructor() : Design
  typographyConstructor() : Typography
}