import Typography from "metamorph-lib/Meta Standardization/dist/models/Typography/Typography";
import FontFamily from "./CssProperties/FontFamily";
import FontSize from "./CssProperties/FontSize";
import FontWeight from "./CssProperties/FontWeight";
import TextTransform from "./CssProperties/TextTransform";

export default class CssStyling {
  readonly font_family: FontFamily
  readonly font_weight: FontWeight
  readonly font_size: FontSize
  readonly text_transofrm: TextTransform

  constructor(typography_node: Typography) {
    this.font_family = new FontFamily(typography_node.font)
    this.font_weight = new FontWeight(typography_node.font)
    this.font_size = new FontSize(typography_node.font)
    this.text_transofrm = new TextTransform(typography_node.font)
  }

  toString(indent_length: number) {
    return (
      ' '.repeat(indent_length) + `/* Typography */` + '\n' +
      ' '.repeat(indent_length) + this.font_family.toString() + '\n' +
      ' '.repeat(indent_length) + this.font_weight.toString() + '\n' +
      ' '.repeat(indent_length) + this.font_size.toString() + '\n' +
      ' '.repeat(indent_length) + this.text_transofrm.toString()
    )
  }
}