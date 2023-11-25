class Border {
  readonly weight : number
  readonly colour : Paint
  readonly radius : LTRB_Edges

  constructor(weight : number, colour : Paint, radius : LTRB_Edges) {
    this.weight = weight
    this.colour = colour
    this.radius = radius
  }
}