"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Display_1 = __importDefault(require("./CssProperties/Display"));
const LinearLayout_1 = __importDefault(require("meta-standardization/src/models/Layout/LinearLayout"));
const CssLinearLayout_1 = __importDefault(require("./CssLinearLayout"));
class CssLayout {
    constructor(layout_node) {
        this.display = new Display_1.default(layout_node.mode);
        this.layout_structure = (layout_node.structure instanceof LinearLayout_1.default
            ? new CssLinearLayout_1.default(layout_node.structure) :
            null);
    }
    toString(indent_length) {
        var _a;
        return (' '.repeat(indent_length) + `/* Layout */` + '\n' +
            ' '.repeat(indent_length) + `${this.display.toString()}` + '\n' +
            ' '.repeat(indent_length) + `${(_a = this.layout_structure) === null || _a === void 0 ? void 0 : _a.toString()}`);
    }
}
exports.default = CssLayout;
