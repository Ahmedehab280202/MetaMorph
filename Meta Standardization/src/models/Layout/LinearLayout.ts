class LinearLayout extends Layout {
  readonly primaryAxis : Axis
  readonly counterAxis : Axis

  constructor(primaryAxis : Axis, counterAxis : Axis){ 
    super("LINEAR")
    
    this.primaryAxis = primaryAxis
    this.counterAxis = counterAxis
  }
}