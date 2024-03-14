import ClassNode from "./ClassNode"
import { LucidCsv } from "./types"

export default class DiagramNode {
  readonly name: String
  readonly class_nodes: ClassNode[]

  constructor(csv_arr: LucidCsv[]) {
    this.name = csv_arr.find(node => node.Id == "1")?.Name || 'Diagram'
    this.class_nodes = (
      csv_arr
        .filter(node => node.Name == 'Class')
        .map(node => new ClassNode(node))
    )
  }
}