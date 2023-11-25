class Design {
  readonly background : Paint
  readonly border : Border
  readonly shadow : Shadow

  constructor(background : Paint, border : Border, shadow : Shadow){
    this.background = background
    this.border = border
    this.shadow = shadow
  }
}