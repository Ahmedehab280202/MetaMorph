
import TextLayout from "meta-standardization/dist/models/Layout/TextLayout";
import TextAlign from "./CssProperties/TextAlign";
import AlignItemsText from "./CssProperties/AlignItemsText";

export default class CssTextLayout {
  readonly text_align: TextAlign
  readonly align_items: AlignItemsText
  
  constructor(structure_node: TextLayout) {
    this.text_align = new TextAlign(structure_node.horizontal_align)
    this.align_items = new AlignItemsText(structure_node.vertical_align)
  }

  toString(indent_length: number) {
    return (
      ' '.repeat(indent_length) + `${this.text_align}` + '\n' +
      ' '.repeat(indent_length) + `${this.align_items}`
    )
  }
}