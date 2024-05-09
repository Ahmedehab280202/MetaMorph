import Axis from 'metamorph-lib/Meta Standardization/dist/models/Layout/Axis'
import { FlexDirectionType } from "../../types";

export default class FlexDirection {
  readonly value: FlexDirectionType

  constructor(primary_axis: Axis) {
    this.value = (
      primary_axis.direction == 'HORIZONTAL'
      ? 'row' :
      'column' 
    )
  }

  toString() {
    return `flex-direction: ${this.value};`
  }
}