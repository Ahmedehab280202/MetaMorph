import Axis from 'meta-standardization/dist/models/Layout/Axis'

export default class Gap {
  readonly value: number

  constructor(primaryAxis: Axis) {
    this.value = primaryAxis.spacing ? primaryAxis.spacing : 0
  }

  toString() {
    return `gap: ${this.value}px;`
  }
}