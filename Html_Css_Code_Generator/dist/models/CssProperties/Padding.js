"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Padding {
    constructor(padding_node) {
        this.left = padding_node.left;
        this.top = padding_node.top;
        this.right = padding_node.right;
        this.bottom = padding_node.bottom;
    }
    toString() {
        return `padding: ${this.left}px ${this.top}px ${this.right}px ${this.bottom}px;`;
    }
}
exports.default = Padding;
