import Font from "meta-standardization/dist/models/Typography/Font"

export default class TextTransform {
  readonly value: 'uppercase' | 'lowercase' | 'capitalize' | 'none'

  constructor(font_node: Font) {
    this.value = (
      font_node.letterCase == 'LOWER' ?
        'lowercase' :
      font_node.letterCase == 'UPPER' ?
        'uppercase' :
      font_node.letterCase == 'TITLE' ?
        'capitalize' :
      'none'
    )
  }

  toString() {
    return `text-transform: ${this.value};`
  }
}