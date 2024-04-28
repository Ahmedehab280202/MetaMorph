"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeclarationNode {
    constructor(access, type, name) {
        this.access = access;
        this.type = type;
        this.name = name;
        this.parent_name = null;
        this.parent_type = null;
        this.extension = '';
    }
    setParentNode(parent_node) {
        this.parent_name = parent_node.name;
        this.parent_type = parent_node.type;
        this.extension = (this.parent_type == 'interface'
            ? 'implements'
            : 'extends');
    }
}
exports.default = DeclarationNode;
