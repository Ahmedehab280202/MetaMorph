"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConstructionNode_1 = __importDefault(require("./ConstructionNode"));
const DeclarationNode_1 = __importDefault(require("./DeclarationNode"));
const MethodNode_1 = __importDefault(require("./MethodNode"));
const PropNode_1 = __importDefault(require("./PropNode"));
class ClassNode {
    constructor(lucid_node) {
        this.id = lucid_node.Id;
        this.type = (lucid_node["Text Area 1"].includes("<<Interface>>")
            ? 'interface'
            : 'class');
        this.name = (this.type == "interface"
            ? lucid_node["Text Area 1"].replace("<<Interface>>", "").trim()
            : lucid_node["Text Area 1"].trim());
        this.declaration = new DeclarationNode_1.default('public', this.type, this.name);
        this.prop_nodes = (this.newLineSlicer(lucid_node["Text Area 2"])
            .map(prop_string => new PropNode_1.default(prop_string)));
        this.construction = new ConstructionNode_1.default('public', this.name, this.prop_nodes);
        this.method_nodes = (this.newLineSlicer(lucid_node["Text Area 3"])
            .map(method_string => new MethodNode_1.default(method_string)));
        this.parent_node = null;
        this.relationships = [];
    }
    newLineSlicer(inputString) {
        const pattern = /(?:[\u200b\n])(.*?)(?=\n|$)/g;
        const matches = inputString.match(pattern) || [];
        return matches;
    }
    setParentNode(parent_node) {
        this.parent_node = parent_node;
        this.declaration.setParentNode(parent_node);
    }
    updateConstructor() {
        this.construction.setRelationships(this.relationships, this.parent_node);
    }
}
exports.default = ClassNode;
