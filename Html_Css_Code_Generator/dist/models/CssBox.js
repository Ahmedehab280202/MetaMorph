"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Width_1 = __importDefault(require("./CssProperties/Width"));
const Height_1 = __importDefault(require("./CssProperties/Height"));
const Padding_1 = __importDefault(require("./CssProperties/Padding"));
class CssBox {
    constructor(box_node) {
        this.width = new Width_1.default(box_node.width);
        this.height = new Height_1.default(box_node.height);
        this.padding = new Padding_1.default(box_node.padding);
    }
    toString(indent_length) {
        return (' '.repeat(indent_length) + `/* Box Dimensions */` + '\n' +
            ' '.repeat(indent_length) + `${this.width.toString()}` + '\n' +
            ' '.repeat(indent_length) + `${this.height.toString()}` + '\n' +
            ' '.repeat(indent_length) + `${this.padding.toString()}`);
    }
}
exports.default = CssBox;
