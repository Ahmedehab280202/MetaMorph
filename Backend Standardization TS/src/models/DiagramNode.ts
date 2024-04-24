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
    this.class_nodes = this.relashionshipIterator(
      csv_arr.filter(node => node.Name == 'Line'),
      this.class_nodes
    )
  }

  relashionshipIterator(rel_arr: LucidCsv[], class_arr: ClassNode[]) {
    let class_nodes = class_arr

    rel_arr.forEach(line => {
      let relashionshipType = (
        line['Source Arrow'] == "None" && line['Destination Arrow'] == "None"
        ? 'Association' :
        line['Source Arrow'] == "None" && line['Destination Arrow'] == "Aggregation"
        ? 'Aggregation' :
        line['Source Arrow'] == "None" && line['Destination Arrow'] == "Composition"
        ? 'Composition' :
        line['Source Arrow'] == "None" && line['Destination Arrow'] == "Generalization"
        ? 'Generalization' :
        "Undefined"
      )

      let source_class = class_arr.find(node => node.id == line["Line Source"])
      let dest_class = class_arr.find(node => node.id == line["Line Destination"])

      if (relashionshipType == 'Association') {
        class_nodes.find(node => node.id == line["Line Source"])?.relashionships.push({'Association': dest_class?.name})
        class_nodes.find(node => node.id == line["Line Destination"])?.relashionships.push({'Association': source_class?.name})
      } else if (relashionshipType == 'Aggregation') {
        class_nodes.find(node => node.id == line["Line Destination"])?.relashionships.push({'Aggregation': source_class?.name})
      } else if (relashionshipType == 'Composition') {
        class_nodes.find(node => node.id == line["Line Destination"])?.relashionships.push({'Composition': source_class?.name})
      } else if (relashionshipType == 'Generalization') {
        if (dest_class?.type == "Interface") {
          class_nodes.find(node => node.id == line["Line Source"])?.relashionships.push({'Implements': dest_class?.name})
        } else {
          class_nodes.find(node => node.id == line["Line Source"])?.relashionships.push({'Inheitance': dest_class?.name})
        }
      }
    })

    return class_nodes
  }
}