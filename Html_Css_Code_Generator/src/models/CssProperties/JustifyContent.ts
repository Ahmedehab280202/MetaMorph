import Axis from 'metamorph-lib/Meta Standardization/dist/models/Layout/Axis'
import { JustifyContentType } from "../../types";

export default class JustifyContent {
  readonly value: JustifyContentType

  constructor(primary_axis: Axis) {
    this.value = (
      primary_axis.alignMode == 'MIN'
      ? 'flex-start' :
      primary_axis.alignMode == 'MAX'
      ? 'flex-end' :
      primary_axis.alignMode == 'SPACE_BETWEEN'
      ? 'space-between' :
      /* primary_axis.direction == 'VERTICAL' */
      'center' 
    )
  }

  toString() {
    return `justify-content: ${this.value};`
  }
}