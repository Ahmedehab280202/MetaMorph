import { LineHeightUnit } from "../../types/types"

export default class LineHeight {
  readonly value : number
  readonly unit : LineHeightUnit

  constructor(value : number, unit : LineHeightUnit) {
    this.value = value
    this.unit = unit
  }
}