"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseNode {
    constructor(id, name, node_type, element_type, data_entity, children, box, layout, design, typography) {
        this.id = id;
        this.name = name;
        this.node_type = node_type;
        this.element_type = element_type;
        this.data_entity = data_entity;
        this.children = children;
        this.box = box;
        this.layout = layout;
        this.design = design;
        this.typography = typography;
    }
}
exports.default = BaseNode;
