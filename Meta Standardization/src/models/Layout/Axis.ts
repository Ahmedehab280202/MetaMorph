class Axis {
  readonly direction : AxisDirection
  readonly alignMode : AxisMode
  readonly spacing : number

	constructor(direction : AxisDirection, alignMode : AxisMode, spacing : number) {
    this.direction = direction
    this.alignMode = alignMode
    this.spacing = spacing
	}
  
}