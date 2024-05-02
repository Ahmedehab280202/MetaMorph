import Layout from "metamorph-lib/Meta Standardization/dist/models/Layout/Layout";
import Display from "./CssProperties/Display"
import CssLinearLayout from "./CssLinearLayout";
import CssTextLayout from "./CssTextLayout";
import LinearLayout from "metamorph-lib/Meta Standardization/dist/models/Layout/LinearLayout";
import TextLayout from "metamorph-lib/Meta Standardization/dist/models/Layout/TextLayout";

export default class CssLayout {
  readonly display: Display;
  readonly layout_structure: CssLinearLayout | CssTextLayout | string

  constructor(layout_node: Layout) {
    this.display = new Display(layout_node.mode);
    this.layout_structure = (
      layout_node.mode == 'LINEAR' || layout_node.structure instanceof LinearLayout ? 
        new CssLinearLayout(layout_node.structure as LinearLayout) :
      layout_node.mode == 'TEXT' || layout_node.structure instanceof TextLayout  ? 
        new CssTextLayout(layout_node.structure as TextLayout) :
      ''
    )
  }

  toString(indent_length: number) {
    return (
      ' '.repeat(indent_length) + `/* Layout */` + '\n' +
      ' '.repeat(indent_length) + this.display.toString() + '\n' +
      this.layout_structure.toString(indent_length)
    )
  }
}