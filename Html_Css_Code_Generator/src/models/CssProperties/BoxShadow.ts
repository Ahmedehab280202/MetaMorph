import Shadow from "metamorph-lib/Meta Standardization/dist/models/Design/Shadow"

export default class BoxShadow {
  readonly x: number
  readonly y: number
  readonly radius: number
  readonly r: number
  readonly g: number
  readonly b: number
  readonly a: number

  constructor(shadow_node: any) {
    this.x = shadow_node.offset.x
    this.y = shadow_node.offset.y
    this.radius = shadow_node.radius
    this.r = shadow_node.color.r
    this.g = shadow_node.color.g
    this.b = shadow_node.color.b
    this.a = shadow_node.color.a
  }

  toString() {
    return `box-shadow: ${this.x}px ${this.y}px ${this.radius}px rgba(${this.r}, ${this.g}, ${this.b}, ${this.a});`
  }
}