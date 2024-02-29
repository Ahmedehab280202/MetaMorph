import { Paint } from "meta-standardization/dist/types/types"

export default class Background {
  readonly r: string
  readonly g: string
  readonly b: string
  readonly a: number

  constructor(backgorund_node: any) {
    this.r = (backgorund_node.color.r * 255).toFixed(1)
    this.g = (backgorund_node.color.g * 255).toFixed(1)
    this.b = (backgorund_node.color.b * 255).toFixed(1)
    this.a = (backgorund_node.opacity).toFixed(1)
  }

  toString() {
    return `background: rgba(${this.r}, ${this.g}, ${this.b}, ${this.a});`
  }
}