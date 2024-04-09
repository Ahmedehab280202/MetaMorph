"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HtmlTree {
    constructor(base_node) {
        this.base_node = base_node;
        this.code = this.base_node.toString(0);
    }
}
exports.default = HtmlTree;
