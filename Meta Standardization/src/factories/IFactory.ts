import BoxModel from "../models/BoxModel/BoxModel"
import Design from "../models/Design/Design"
import Layout from "../models/Layout/Layout"
import BaseNode from "../models/Nodes/BaseNode"

export default interface IFactory {
  nodeConstructor?(node : Object): BaseNode
  boxConstructor?() : BoxModel
  layoutConstructor?() : Layout
  designConstructor?() : Design
  /* typographyConstructor?() : Typography */
}