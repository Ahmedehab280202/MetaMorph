class Paint {
  readonly type : PaintType
  readonly r : number 
  readonly g : number
  readonly b : number
  readonly a : number

  constructor(type : PaintType, r : number, g : number, b : number, a : number) {
    this.type = type
    this.r = r
    this.g = g
    this.b = b
    this.a = a
  }
}