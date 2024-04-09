export default class TextAlign {
  readonly value: 'left' | 'right' | 'center'

  constructor(horizontal_align: "LEFT" | "CENTER" | "RIGHT" | "JUSTIFIED") {
    this.value = (
      horizontal_align == 'LEFT' ?
        'left' :
      horizontal_align == 'RIGHT' ?
        'right' :
      'center'
    )
  }

  toString() {
    return `text-align: ${this.value};`
  }
}