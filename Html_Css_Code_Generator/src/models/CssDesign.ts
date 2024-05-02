import Design from "metamorph-lib/Meta Standardization/dist/models/Design/Design";
import Background from "./CssProperties/Background";
import BorderRadius from "./CssProperties/BorderRadius";
import { NodeType } from "metamorph-lib/Meta Standardization/dist/types/types";
import BorderStyle from "./CssProperties/BorderStyle";
import BoxShadow from "./CssProperties/BoxShadow";

export default class CssDesign {
  readonly background: Background | null
  readonly border_radius: BorderRadius | null
  readonly border_style: BorderStyle | null
  readonly box_shadow: BoxShadow | null

  constructor(design_node: Design, node_type: NodeType) {
    this.background = design_node.background[0] ? new Background(design_node.background[0], node_type) : null
    this.border_radius = design_node.border.radius.topLeft ? new BorderRadius(design_node.border) : null
    this.border_style = design_node.border.colour.length > 0 ? new BorderStyle(design_node.border) : null
    this.box_shadow = design_node.shadow.length > 0 ? new BoxShadow(design_node.shadow[0]) : null
  }

  toString(indent_length: number) {
    return (
      ' '.repeat(indent_length) + `/* Design Properties */` + '\n' +
      (this.background ? ' '.repeat(indent_length) +  this.background.toString() + '\n' : '')  +
      (this.border_radius ? ' '.repeat(indent_length) +  this.border_radius.toString() + '\n' : '') +
      (this.border_style ? ' '.repeat(indent_length) +  this.border_style.toString() + '\n' : '') +
      (this.box_shadow ? ' '.repeat(indent_length) +  this.box_shadow.toString() + '\n' : '')
    )
  }
}