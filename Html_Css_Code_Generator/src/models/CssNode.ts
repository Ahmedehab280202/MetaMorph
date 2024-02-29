import BaseNode from "meta-standardization/dist/models/Nodes/BaseNode"
import CssBox from "./CssBox"
import CssLayout from "./CssLayout"
import CssDesign from "./CssDesign"

export default class CssNode {
  readonly class_name: string
  readonly box: CssBox
  readonly layout: CssLayout
  readonly design: CssDesign
  readonly is_parent: Boolean;
  readonly children_nodes: Array<CssNode>

  constructor(node: BaseNode) {
    this.class_name = node.name;
    this.box = new CssBox(node.box, node.node_type)
    this.layout = new CssLayout(node.layout)
    this.design = new CssDesign(node.design)
    this.is_parent = node.children?.length > 0 ? true : false;
    this.children_nodes = node.children?.map(child_node => new CssNode(child_node))
  }

  toString(parent_class: string = ''): string {
    let output = ( parent_class +
      `.${this.class_name} {` + '\n'
      + `${this.box.toString(4)}` + '\n'
      + `${this.layout.toString(4)}` + '\n'
      + `${this.design.toString(4)}` + '\n'
      + '}'
    )

    if (this.is_parent) {
      return ( 
        output + '\n'
        + '\n'
        + this.children_nodes?.map(child_node => child_node.toString(`${parent_class}.${this.class_name} `)).join('\n')
      )
    } else {
      return output
    }
  }
}