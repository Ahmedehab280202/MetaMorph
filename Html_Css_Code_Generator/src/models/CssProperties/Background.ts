import { NodeType } from "meta-standardization/dist/types/types"

export default class Background {
  readonly name: 'background' | 'color'
  readonly r: string
  readonly g: string
  readonly b: string
  readonly a: number

  constructor(backgorund_node: any, node_type: NodeType) {
    this.r = (backgorund_node.color.r * 255).toFixed(1)
    this.g = (backgorund_node.color.g * 255).toFixed(1)
    this.b = (backgorund_node.color.b * 255).toFixed(1)
    this.a = backgorund_node.opacity?.toFixed(1) || backgorund_node.color.a?.toFixed(1) || 1

    this.name = (
      node_type == 'TEXT' ?
        'color' :
      'background'
    )
  }

  toString() {
    return `${this.name}: rgba(${this.r}, ${this.g}, ${this.b}, ${this.a});`
  }
}