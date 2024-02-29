"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BoxModel_1 = __importDefault(require("../models/BoxModel/BoxModel"));
const Dimension_1 = __importDefault(require("../models/BoxModel/Dimension"));
const LTRB_1 = __importDefault(require("../models/BoxModel/LTRB"));
const Design_1 = __importDefault(require("../models/Design/Design"));
const AbsoluteLayout_1 = __importDefault(require("../models/Layout/AbsoluteLayout"));
const Axis_1 = __importDefault(require("../models/Layout/Axis"));
const Layout_1 = __importDefault(require("../models/Layout/Layout"));
const LinearLayout_1 = __importDefault(require("../models/Layout/LinearLayout"));
const Vector_1 = __importDefault(require("../models/Layout/Vector"));
const BaseNode_1 = __importDefault(require("../models/Nodes/BaseNode"));
const Border_1 = __importDefault(require("../models/Design/Border"));
const LTRB_Edges_1 = __importDefault(require("../models/Design/LTRB_Edges"));
class FigmaFactory {
    static NodeConstructor(node) {
        let node_name = node.name;
        const type_substring_match = node_name.match(/#([a-zA-Z]+)/);
        const element_type = (type_substring_match
            ? type_substring_match[0].replace(/#/g, '')
            : 'div');
        node_name = (type_substring_match
            ? node_name.slice(0, type_substring_match.index) + node_name.slice(type_substring_match.index + type_substring_match[0].length)
            : node_name);
        const entity_substring_match = node_name.match(/\$([^\s]+)/);
        const data_entity = (entity_substring_match
            ? entity_substring_match[0].replace(/#/g, '')
            : null);
        node_name = (entity_substring_match
            ? node_name.slice(0, entity_substring_match.index) + node_name.slice(entity_substring_match.index + entity_substring_match[0].length)
            : node_name);
        node_name = node_name.replace(/\s+/g, '');
        return new BaseNode_1.default(node.id, node_name, element_type, data_entity, this.ChildrenRecursion(node.children), this.BoxModelConstructor(node.box), this.layoutConstructor(node.layout), this.DesignConstructor(node.design));
    }
    /* static  extractTypeSubstring(input: string): string {
      const regex = /#([a-zA-Z]+)/;
      const match = input.match(regex);
  
      if (match) {
        console.log(match);
        console.log(match[0].replace(/#/g, ''));
      }
  
      return match ? match[0] : 'ssss';
    } */
    static ChildrenRecursion(children) {
        return children?.map((child) => this.NodeConstructor(child));
    }
    static layoutConstructor(node) {
        const mode = node.layoutMode == "NONE" ? 'ABSOLUTE' : 'LINEAR';
        const structure = (mode == "ABSOLUTE"
            ? new AbsoluteLayout_1.default(new Vector_1.default(node.x, node.y)) :
            mode == "LINEAR"
                ? new LinearLayout_1.default(new Axis_1.default(node.layoutMode == "HORIZONTAL" ? "HORIZONTAL" : "VERTICAL", node.primaryAxisAlignItems, node.itemSpacing), new Axis_1.default(node.layoutMode == "HORIZONTAL" ? "VERTICAL" : "HORIZONTAL", node.counterAxisAlignItems, node.itemSpacing)) :
                {});
        return new Layout_1.default(mode, structure);
    }
    static BoxModelConstructor(node) {
        const primAxisMode = () => {
            if (node.primaryAxisSizingMode == "FIXED") {
                if (node.layoutMode == node.parentLayoutMode && node.parentNodeType == "FRAME") {
                    if (node.layoutGrow == 1) {
                        return "STRETCH";
                    }
                    else {
                        return "FIXED";
                    }
                }
                else if (node.layoutMode != node.parentLayoutMode && node.parentNodeType == "FRAME") {
                    if (node.layoutAlign == "STRETCH") {
                        return "STRETCH";
                    }
                    else {
                        return "FIXED";
                    }
                }
                else {
                    return "FIXED";
                }
            }
            else {
                return "AUTO";
            }
        };
        const countAxisMode = () => {
            if (node.counterAxisSizingMode == "FIXED") {
                if (node.layoutMode != node.parentLayoutMode) {
                    if (node.layoutGrow == 1) {
                        return "STRETCH";
                    }
                    else {
                        return "FIXED";
                    }
                }
                else {
                    if (node.layoutAlign == "STRETCH") {
                        return "STRETCH";
                    }
                    else {
                        return "FIXED";
                    }
                }
            }
            else {
                return "AUTO";
            }
        };
        const widthMode = (node.layoutMode == "HORIZONTAL"
            ? primAxisMode() :
            node.layoutMode == "VERTICAL"
                ? countAxisMode()
                : "AUTO");
        const widthUnit = (widthMode == "FIXED"
            ? "PIXEL" :
            widthMode == "STRETCH"
                ? "PERCENTAGE"
                : "NONE");
        const heightMode = (node.layoutMode == "VERTICAL"
            ? primAxisMode() :
            node.layoutMode == "HORIZONTAL"
                ? countAxisMode()
                : "AUTO");
        const heightUnit = (heightMode == "FIXED"
            ? "PIXEL" :
            heightMode == "STRETCH"
                ? "PERCENTAGE"
                : "NONE");
        const width = new Dimension_1.default(node.width, widthMode, widthUnit);
        const height = new Dimension_1.default(node.height, heightMode, heightUnit);
        const padding = new LTRB_1.default(node.paddingLeft, node.paddingTop, node.paddingRight, node.paddingBottom);
        return new BoxModel_1.default(width, height, padding);
    }
    static DesignConstructor(node) {
        return new Design_1.default(node.fills, new Border_1.default(node.strokeWeight, node.strokes, new LTRB_Edges_1.default(node.topLeftRadius, node.topRightRadius, node.bottomRightRadius, node.bottomLeftRadius)), node.effects.filter(effect_node => effect_node.type == 'DROPSHADOW' || effect_node.type == 'INNERSHADOW'), node.effects.filter(effect_node => effect_node.type == 'LAYER_BLUR' || effect_node.type == 'BACKGROUND_BLUR'));
    }
}
exports.default = FigmaFactory;
