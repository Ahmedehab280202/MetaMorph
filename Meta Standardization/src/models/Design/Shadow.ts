class Shadow {
  readonly type : ShadowType
  readonly colour : Paint
  readonly offset : Vector
  readonly radius : number

  constructor(type : ShadowType, colour : Paint, offset : Vector, radius : number){
    this.type = type
    this.colour = colour
    this.offset = offset
    this.radius = radius
  }
}