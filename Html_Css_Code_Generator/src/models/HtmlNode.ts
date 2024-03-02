
export default class HtmlNode {
  readonly type: string;
  readonly class_name: string;
  readonly content: string;
  readonly children_nodes: Array<HtmlNode>;
  readonly is_parent: Boolean;

  constructor(type: string, class_name: string, content: string, children_nodes: Array<HtmlNode>) {
    this.type = type
    this.class_name = class_name
    this.content = content
    this.children_nodes = children_nodes
    this.is_parent = children_nodes.length > 0 ? true : false;
  }

  toString(indent_length: number): string {
    if (this.is_parent) {
      return (
        ' '.repeat(indent_length)
        + `<${this.type} class='${this.class_name}'>`
        + '\n'
        + this.children_nodes.map(child_node => child_node.toString(indent_length+4)).join('')
        + ' '.repeat(indent_length)
        + `</${this.type}>`
        + '\n'
      )
    } else {
      return (
        ' '.repeat(indent_length)
        + `<${this.type} class='${this.class_name}'>`
        + this.content
        + `</${this.type}>`
        + '\n'
      )
    }
  }
}