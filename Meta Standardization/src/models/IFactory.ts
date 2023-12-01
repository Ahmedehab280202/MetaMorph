import BoxModel from "./BoxModel/BoxModel"
import Design from "./Design/Design"
import Layout from "./Layout/Layout"
import BaseNode from "./Nodes/BaseNode"

export default interface IFactory {
  nodeConstructor?(node : Object): BaseNode
  boxConstructor?() : BoxModel
  layoutConstructor?() : Layout
  designConstructor?() : Design
  typographyConstructor?() : Typography
}