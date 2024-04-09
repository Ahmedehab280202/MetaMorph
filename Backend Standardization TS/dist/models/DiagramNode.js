"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClassNode_1 = __importDefault(require("./ClassNode"));
class DiagramNode {
    constructor(csv_arr) {
        this.name = csv_arr.find(node => node.Id == "1")?.Name || 'Diagram';
        this.class_nodes = (csv_arr
            .filter(node => node.Name == 'Class')
            .map(node => new ClassNode_1.default(node)));
    }
}
exports.default = DiagramNode;
