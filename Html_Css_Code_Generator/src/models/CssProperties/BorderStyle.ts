import Border from "metamorph-lib/Meta Standardization/dist/models/Design/Border"
import SolidPaint from "metamorph-lib/Meta Standardization/dist/models/Design/SolidPaint"

export default class BorderStyle {
  readonly weight: number
  readonly type: string
  readonly r: number
  readonly g: number
  readonly b: number
  readonly a: number

  constructor(border_node: Border) {
    this.weight = border_node.weight
    this.type = "SOLID"

    const paint: SolidPaint = border_node.colour[0] as SolidPaint
    this.r = paint ? paint.color.r : 0
    this.g = paint ? paint.color.g : 0
    this.b = paint ? paint.color.b : 0
    this.a = paint ? paint.color.a : 0
  }

  toString() {
    console.log(`border: ${this.weight.toFixed(2)}px ${this.type} rgba(${this.r}, ${this.g}, ${this.b}, 0.${this.a});`);
    return `border: ${this.weight.toFixed(2)}px ${this.type} rgba(${this.r}, ${this.g}, ${this.b}, 0.${this.a});`
  }
}