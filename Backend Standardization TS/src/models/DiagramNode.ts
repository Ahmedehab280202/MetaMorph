import ClassNode from "./ClassNode"
import RelationshipNode from "./RelationshipNode"
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

      let source_class = class_arr.find(node => node.id == line["Line Source"]);
      let dest_class = class_arr.find(node => node.id == line["Line Destination"]);
      let source_index = source_class ? class_arr.indexOf(source_class) : null
      let dest_index = dest_class ? class_arr.indexOf(dest_class) : null

      if (source_index != null && dest_index != null) {
        if (relashionshipType == 'Association') {
          class_nodes[source_index].relationships.push( new RelationshipNode('Association', dest_class?.name || '') )
          class_nodes[dest_index].relationships.push( new RelationshipNode('Association', source_class?.name || '') )
        } else if (relashionshipType == 'Aggregation') {
          class_nodes[dest_index].relationships.push( new RelationshipNode('Aggregation', source_class?.name || ''))
        } else if (relashionshipType == 'Composition') {
          class_nodes[dest_index].relationships.push( new RelationshipNode('Composition', source_class?.name || ''))
        } else if (relashionshipType == 'Generalization' && dest_class) {
          class_nodes[source_index].parent_node = dest_class
        }
      }
    })

    return class_nodes
  }
}