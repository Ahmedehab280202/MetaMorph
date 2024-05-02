import Dimension from "metamorph-lib/Meta Standardization/dist/models/BoxModel/Dimension"
import { WidthUnit } from "../../types"
import { NodeType } from "metamorph-lib/Meta Standardization/dist/types/types"

export default class Width {
  readonly value: number | 'auto'
  readonly unit: WidthUnit | ''

  constructor(width_node: Dimension, node_type: NodeType, is_child: Boolean) {
    if (!is_child) {
      this.value = 100
      this.unit = '%'
    } else if (width_node.mode == 'FIXED' || node_type=='TEXT') {
      this.value = width_node.value
      this.unit = 'px'
    } else if (width_node.mode == 'STRETCH') {
      this.value = 100
      this.unit = '%'
    } else {
      this.value = 'auto'
      this.unit = ''
    }
  }

  toString() {
    return `width: ${this.value}${this.unit};` 
  }
}