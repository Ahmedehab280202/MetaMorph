import { AlignItemsType } from "../../types"

export default class AlignItemsText {
  readonly value: AlignItemsType

  constructor(vertical_align: "CENTER" | "TOP" | "BOTTOM") {
    this.value = (
      vertical_align == 'TOP' ?
        'flex-start' :
        vertical_align == 'BOTTOM' ?
        'flex-end' :
      'center'
    )
  }

  toString() {
    return `align-items: ${this.value};`
  }
}