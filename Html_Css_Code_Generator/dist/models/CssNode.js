"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CssBox_1 = __importDefault(require("./CssBox"));
const CssLayout_1 = __importDefault(require("./CssLayout"));
class CssNode {
    constructor(node) {
        this.class_name = node.name;
        this.box = new CssBox_1.default(node.box);
        this.layout = new CssLayout_1.default(node.layout);
    }
    toString() {
        return (`.${this.class_name} {` + '\n'
            + `${this.box.toString(4)}` + '\n'
            + `${this.layout.toString(4)}` + '\n'
            + '}');
    }
}
exports.default = CssNode;
