"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FlexDirection_1 = __importDefault(require("./CssProperties/FlexDirection"));
class CssLinearLayout {
    constructor(structure_node) {
        this.flex_direction = new FlexDirection_1.default(structure_node.primaryAxis);
    }
    toString() {
        return (`flex-direction: ${this.flex_direction};` + '\n');
    }
}
exports.default = CssLinearLayout;
