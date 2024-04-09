import Axis from 'meta-standardization/dist/models/Layout/Axis'
import { AlignItemsType } from "../../types";

export default class AlignItems {
  readonly value: AlignItemsType

  constructor(counterAxis: Axis) {
    this.value = (
      counterAxis.alignMode == 'MIN'
      ? 'flex-start' :
      counterAxis.alignMode == 'MAX'
      ? 'flex-end' :
      'center' 
    )
  }

  toString() {
    return `align-items: ${this.value};`
  }
}