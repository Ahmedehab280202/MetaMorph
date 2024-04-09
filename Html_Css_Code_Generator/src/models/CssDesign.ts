import Design from "meta-standardization/dist/models/Design/Design";
import Background from "./CssProperties/Background";
import BorderRadius from "./CssProperties/BorderRadius";
import { NodeType } from "meta-standardization/dist/types/types";

export default class CssDesign {
  readonly background: Background | null
  readonly border_radius: BorderRadius | null

  constructor(design_node: Design, node_type: NodeType) {
    this.background = design_node.background[0] ? new Background(design_node.background[0], node_type) : null
    this.border_radius = design_node.border.radius.topLeft ? new BorderRadius(design_node.border) : null
  }

  toString(indent_length: number) {
    return (
      ' '.repeat(indent_length) + `/* Design Properties */` + '\n' +
      ' '.repeat(indent_length) + (this.background ? this.background.toString() + '\n' : '')  +
      ' '.repeat(indent_length) + (this.border_radius ? this.border_radius.toString() + '\n' : '')
    )
  }
}