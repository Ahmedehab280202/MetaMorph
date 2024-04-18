"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HtmlNode {
    constructor(type, class_name, content, children_nodes) {
        this.type = type;
        this.class_name = class_name;
        this.content = content;
        this.children_nodes = children_nodes;
        this.is_parent = children_nodes.length > 0 ? true : false;
    }
    toString(indent_length) {
        if (this.is_parent) {
            return (' '.repeat(indent_length)
                + `<${this.type} class='${this.class_name}'>`
                + '\n'
                + this.children_nodes.map(child_node => child_node.toString(indent_length + 4)).join('')
                + ' '.repeat(indent_length)
                + `<${this.type}>`
                + '\n');
        }
        else {
            return (' '.repeat(indent_length)
                + `<${this.type} class='${this.class_name}'>`
                + this.content
                + `<${this.type}>`
                + '\n');
        }
        /* const content_str = (
          this.is_parent
          ? '\n' + ' '.repeat(indent_length) + this.children_nodes.map(child_node => child_node.toString(indent_length+2)).join('\n') + '\n'
          : this.content
        )
    
        return `${' '.repeat(indent_length)}<${this.type} class='${this.class_name}'>${content_str}<${this.type}>` */
    }
}
exports.default = HtmlNode;
