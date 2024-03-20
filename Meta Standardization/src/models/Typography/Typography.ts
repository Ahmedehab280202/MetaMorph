import { TextDecoration } from "../../types/types"
import Font from "./Font"
import LineHeight from "./LineHeight"

export default class Typography {
  readonly font : Font
  readonly decoration : TextDecoration
  readonly lineHeight : LineHeight
  readonly indent : number

  constructor(font : Font, decoration : TextDecoration, lineHeight : LineHeight, indent : number) {
    this.font = font
    this.decoration = decoration
    this.lineHeight = lineHeight
    this.indent = indent
  }
}
