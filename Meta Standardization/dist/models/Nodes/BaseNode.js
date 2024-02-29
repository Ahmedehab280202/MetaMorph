"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseNode {
    constructor(id, name, element_type, data_entity, children, box, layout, design) {
        this.id = id;
        this.name = name;
        this.element_type = element_type;
        this.data_entity = data_entity;
        this.children = children;
        this.box = box;
        this.layout = layout;
        this.design = design;
    }
}
exports.default = BaseNode;
