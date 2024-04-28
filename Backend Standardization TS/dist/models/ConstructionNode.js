"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConstructionNode {
    constructor(modifier, name, prop_nodes) {
        this.modifier = modifier;
        this.name = name;
        this.param_nodes = prop_nodes;
        this.init_nodes = prop_nodes;
        this.parent_nodes = [];
    }
    setRelationships(rel_arr, parent_node) {
        rel_arr.forEach(rel_node => {
            if (rel_node.type == 'Association') {
                this.param_nodes = this.param_nodes.filter(prop_node => !prop_node.dtype.includes(rel_node.class_name));
                this.init_nodes = this.init_nodes.filter(init_node => !init_node.dtype.includes(rel_node.class_name));
            }
            else if (rel_node.type == 'Composition') {
                this.param_nodes = this.param_nodes.filter(prop_node => !prop_node.dtype.includes(rel_node.class_name));
            }
        });
        if (parent_node && parent_node.type == 'class') {
            this.param_nodes = this.param_nodes.concat(parent_node.prop_nodes);
            this.parent_nodes = this.parent_nodes.concat(parent_node.prop_nodes);
        }
    }
}
exports.default = ConstructionNode;
