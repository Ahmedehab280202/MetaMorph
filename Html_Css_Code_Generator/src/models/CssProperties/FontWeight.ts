import Font from "meta-standardization/dist/models/Typography/Font"

export default class FontWeight {
  readonly value: number

  constructor(font_node: Font) {
    this.value = font_node.weight
  }

  toString() {
    return `font-weight: ${this.value};`
  }
}