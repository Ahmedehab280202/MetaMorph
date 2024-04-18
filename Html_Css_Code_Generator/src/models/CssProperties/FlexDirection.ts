import Axis from 'meta-standardization/dist/models/Layout/Axis'
import { FlexDirectionType } from "../../types";

export default class FlexDirection {
  readonly value: FlexDirectionType

  constructor(primary_axis: Axis) {
    this.value = (
      primary_axis.direction == 'HORIZONTAL'
      ? 'row' :
      /* primary_axis.direction == 'VERTICAL' */
      'column' 
    )
  }

  toString() {
    return `flex-direction: ${this.value};`
  }
}