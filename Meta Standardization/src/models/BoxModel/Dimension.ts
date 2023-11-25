class Dimension {
  readonly value : number
  readonly mode : DimensionMode
  readonly unit : DimensionUnit

  constructor(value : number, mode : DimensionMode, unit : DimensionUnit){
    this.value = value
    this.mode = mode
    this.unit = unit
  }
}