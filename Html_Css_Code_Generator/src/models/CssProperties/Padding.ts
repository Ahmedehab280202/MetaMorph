import LTRB from "metamorph-lib/Meta Standardization/dist/models/BoxModel/LTRB"

export default class Padding {
  readonly left : number
  readonly top : number
  readonly right : number
  readonly bottom : number

  constructor(padding_node: LTRB) {
    this.left = padding_node.left ? padding_node.left : 0
    this.top = padding_node.top ? padding_node.top : 0
    this.right = padding_node.right ? padding_node.right : 0
    this.bottom = padding_node.bottom ? padding_node.bottom : 0
  }

  toString() {
    return `padding: ${this.top}px ${this.right}px ${this.bottom}px ${this.left}px;`
  }
}