import BoxModel from "metamorph-lib/Meta Standardization/dist/models/BoxModel/BoxModel";
import Width from "./CssProperties/Width";
import Height from "./CssProperties/Height";
import Padding from "./CssProperties/Padding";
import { NodeType } from "metamorph-lib/Meta Standardization/dist/types/types";

export default class CssBox {
  readonly width: Width
  readonly height: Height
  readonly padding: Padding

  constructor(box_node: BoxModel, node_type: NodeType, is_child: Boolean) {
    this.width = new Width(box_node.width, node_type, is_child)
    this.height = new Height(box_node.height, node_type)
    this.padding = new Padding(box_node.padding)
  }

  toString(indent_length: number) {
    return (
      ' '.repeat(indent_length) + `/* Box Dimensions */` + '\n' +
      ' '.repeat(indent_length) + `${this.width.toString()}`+ '\n' +
      ' '.repeat(indent_length) + `${this.height.toString()}`+ '\n' +
      ' '.repeat(indent_length) + `${this.padding.toString()}`
    )
  }
}