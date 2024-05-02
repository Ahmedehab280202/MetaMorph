import Dimension from "metamorph-lib/Meta Standardization/dist/models/BoxModel/Dimension"
import { HeightUnit } from "../../types"
import { NodeType } from "metamorph-lib/Meta Standardization/dist/types/types"

export default class Height {
  readonly value: number | 'auto'
  readonly unit: HeightUnit | ''

  constructor(height_node: Dimension, node_type: NodeType) {
    if (height_node.mode == 'FIXED' || node_type=='TEXT') {
      this.value = height_node.value
      this.unit = 'px'
    } else if (height_node.mode == 'STRETCH') {
      this.value = 100
      this.unit = '%'
    } else {
      this.value = 'auto'
      this.unit = ''
    }
  }

  toString() {
    return `height: ${this.value}${this.unit};`
  }
}