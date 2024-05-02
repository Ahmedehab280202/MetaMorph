import Font from "metamorph-lib/Meta Standardization/dist/models/Typography/Font"

export default class FontFamily {
  readonly value: string

  constructor(font_node: Font) {
    this.value = font_node.family
  }

  toString() {
    return `font-family: '${this.value}';`
  }
}