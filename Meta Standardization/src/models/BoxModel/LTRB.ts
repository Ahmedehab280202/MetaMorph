export default class LTRB {
  readonly left : number
  readonly top : number
  readonly right : number
  readonly bottom : number

  constructor(left : number, top : number, right : number, bottom : number){
    this.left = left
    this.top = top
    this.right = right
    this.bottom = bottom
  }
}