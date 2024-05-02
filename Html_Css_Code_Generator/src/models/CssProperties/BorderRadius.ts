import Border from "metamorph-lib/Meta Standardization/dist/models/Design/Border"

export default class BorderRadius {
  readonly top_left: number
  readonly top_right: number
  readonly bottom_right: number
  readonly bottom_left: number

  constructor(border_node: Border) {
    this.top_left = border_node.radius.topLeft
    this.top_right = border_node.radius.topRight
    this.bottom_right = border_node.radius.bottomRight
    this.bottom_left = border_node.radius.bottomLeft
  }

  toString() {
    return `border-radius: ${this.top_left}px ${this.top_right}px ${this.bottom_right}px ${this.bottom_left}px;`
  }
}