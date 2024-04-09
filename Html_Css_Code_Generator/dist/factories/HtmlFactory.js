"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HtmlNode_1 = __importDefault(require("../models/HtmlNode"));
class HtmlFactory {
    static BaseNodeConvertor(node) {
        const childRecursion = (node) => {
            if (node.children) {
                return node.children.map(child_node => {
                    return this.BaseNodeConvertor(child_node);
                });
            }
            else {
                return [];
            }
        };
        return new HtmlNode_1.default(node.element_type, node.name, null, childRecursion(node));
    }
}
exports.default = HtmlFactory;
