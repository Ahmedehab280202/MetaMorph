
import LinearLayout from "meta-standardization/dist/models/Layout/LinearLayout";
import FlexDirection from "./CssProperties/FlexDirection";
import JustifyContent from "./CssProperties/JustifyContent";
import AlignItems from "./CssProperties/AlignItems";
import Gap from "./CssProperties/Gap";

export default class CssLinearLayout {
  readonly flex_direction: FlexDirection
  readonly justify_content: JustifyContent
  readonly align_items: AlignItems
  readonly gap: Gap
  
  constructor(structure_node: LinearLayout) {
    this.flex_direction = new FlexDirection(structure_node.primaryAxis)
    this.justify_content = new JustifyContent(structure_node.primaryAxis)
    this.align_items = new AlignItems(structure_node.counterAxis)
    this.gap = new Gap(structure_node.primaryAxis)
  }

  toString(indent_length: number) {
    return (
      ' '.repeat(indent_length) + `${this.flex_direction}` + '\n' +
      ' '.repeat(indent_length) + `${this.justify_content}` + '\n' +
      ' '.repeat(indent_length) + `${this.align_items}` + '\n' +
      ' '.repeat(indent_length) + `${this.gap}`
    )
  }
}