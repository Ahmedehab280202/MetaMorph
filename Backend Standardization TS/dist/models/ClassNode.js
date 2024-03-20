"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MethodNode_1 = __importDefault(require("./MethodNode"));
const PropNode_1 = __importDefault(require("./PropNode"));
class ClassNode {
    constructor(lucid_node) {
        this.id = lucid_node.Id;
        this.name = lucid_node["Text Area 1"];
        this.prop_nodes = (this.newLineSlicer(lucid_node["Text Area 2"])
            .map(prop_string => new PropNode_1.default(prop_string)));
        this.method_nodes = (this.newLineSlicer(lucid_node["Text Area 3"])
            .map(method_string => new MethodNode_1.default(method_string)));
    }
    newLineSlicer(inputString) {
        const pattern = /(?:[\u200b\n])(.*?)(?=\n|$)/g;
        const matches = inputString.match(pattern) || [];
        return matches;
    }
}
exports.default = ClassNode;
