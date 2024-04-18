import HtmlNode from "./HtmlNode";

export default class HtmlTree {
  readonly base_node: HtmlNode
  readonly code: string

  constructor(base_node: HtmlNode) {
    this.base_node = base_node
    this.code = this.base_node.toString(0)
  }
}