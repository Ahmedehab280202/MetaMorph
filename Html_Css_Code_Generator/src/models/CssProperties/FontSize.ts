import Font from "metamorph-lib/Meta Standardization/dist/models/Typography/Font"

export default class FontSize {
  readonly value: number

  constructor(font_node: Font) {
    this.value = font_node.size
  }

  toString() {
    return `font-size: ${this.value}px;`
  }
}