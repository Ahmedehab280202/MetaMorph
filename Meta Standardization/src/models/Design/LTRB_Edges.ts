class LTRB_Edges {
  readonly topLeft : number
  readonly topRight : number
  readonly bottomRight : number
  readonly bottomLeft : number

  constructor(topLeft : number, topRight : number, bottomRight : number, bottomLeft : number){
    this.topLeft = topLeft
    this.topRight = topRight
    this.bottomRight = bottomRight
    this.bottomLeft = bottomLeft
  }
}