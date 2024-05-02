import BaseNode from "metamorph-lib/Meta Standardization/dist/models/Nodes/BaseNode";
import HtmlNode from "../models/HtmlNode";

export default class HtmlFactory {
  static BaseNodeConvertor(node: BaseNode): HtmlNode {

    const childRecursion = (node: BaseNode) => {
      if (node.children) {
        return node.children.map(child_node => {
          return this.BaseNodeConvertor(child_node)
        })
      } else {
        return []
      }
    }

    return new HtmlNode(
      node.element_type,
      node.name,
      node.node_type == 'TEXT' ? node.text_content : '',
      childRecursion(node)
    )
  }
}