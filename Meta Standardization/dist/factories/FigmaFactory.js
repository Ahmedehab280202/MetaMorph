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
const Typography_1 = __importDefault(require("../models/Typography/Typography"));
const Font_1 = __importDefault(require("../models/Typography/Font"));
const LineHeight_1 = __importDefault(require("../models/Typography/LineHeight"));
const TextLayout_1 = __importDefault(require("../models/Layout/TextLayout"));
class FigmaFactory {
    static NodeConstructor(node) {
        let node_name = node.name;
        const type_substring_match = node_name.match(/#([a-zA-Z]+)/);
        const element_type = (type_substring_match
            ? type_substring_match[0].replace(/#/g, '')
            : 'div');
        node_name = (type_substring_match && type_substring_match.index
            ? node_name.slice(0, type_substring_match.index) + node_name.slice(type_substring_match.index + type_substring_match[0].length)
            : node_name);
        const entity_substring_match = node_name.match(/\$([^\s]+)/);
        const data_entity = (entity_substring_match
            ? entity_substring_match[0].replace(/#/g, '')
            : null);
        node_name = (entity_substring_match && entity_substring_match.index
            ? node_name.slice(0, entity_substring_match.index) + node_name.slice(entity_substring_match.index + entity_substring_match[0].length)
            : node_name);
        node_name = node_name.replace(/\s+/g, '');
        return new BaseNode_1.default(node.id, node_name, node.node_type, element_type, data_entity, this.ChildrenRecursion(node.children), this.BoxModelConstructor(node.box), this.layoutConstructor(node.layout), this.DesignConstructor(node.design), this.TypographyConstructor(node.typography));
    }
    static ChildrenRecursion(children) {
        return children?.map((child) => this.NodeConstructor(child));
    }
    static layoutConstructor(node) {
        const mode = (node.textAlignHorizontal ?
            'TEXT' :
            node.layoutMode == 'NONE' ?
                'ABSOLUTE' :
                'LINEAR');
        const structure = (mode == "ABSOLUTE" ?
            new AbsoluteLayout_1.default(new Vector_1.default(node.x, node.y)) :
            mode == "LINEAR" ?
                new LinearLayout_1.default(new Axis_1.default(node.layoutMode == "HORIZONTAL" ? "HORIZONTAL" : "VERTICAL", node.primaryAxisAlignItems, node.itemSpacing), new Axis_1.default(node.layoutMode == "HORIZONTAL" ? "VERTICAL" : "HORIZONTAL", node.counterAxisAlignItems, node.itemSpacing)) :
                mode == 'TEXT' ?
                    new TextLayout_1.default(node.textAlignHorizontal, node.textAlignVertical, node.letterSpacingValue, node.letterSpacingUnit) :
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
    static TypographyConstructor(node) {
        if (Object.keys(node).length > 0) {
            return new Typography_1.default(new Font_1.default(node.fontFamily, node.isItalic ? 'ITALIC' : 'NORMAL', (node.fontStyle ?
                node.fontStyle.includes('Thin') || node.fontStyle.includes('Hairline') ? 100 :
                    node.fontStyle.includes('ExtraLight') || node.fontStyle.includes('UltraLight') ? 200 :
                        node.fontStyle.includes('Light') ? 300 :
                            node.fontStyle.includes('Normal') || node.fontStyle.includes('Regular') ? 400 :
                                node.fontStyle.includes('Medium') ? 500 :
                                    node.fontStyle.includes('SemiBold') || node.fontStyle.includes('DemiBold') ? 600 :
                                        node.fontStyle.includes('Bold') ? 700 :
                                            node.fontStyle.includes('ExtraBold') || node.fontStyle.includes('UltraBold') ? 800 :
                                                node.fontStyle.includes('Black') || node.fontStyle.includes('Heavy') ? 900 :
                                                    node.fontStyle.includes('ExtraBlack') || node.fontStyle.includes('UltraBlack') ? 950
                                                        : 400
                : 400), node.fontSize, (node.textCase == 'LOWER' ?
                'LOWER' :
                node.textCase == 'UPPER' ?
                    'UPPER' :
                    node.textCase == 'TITLE' ?
                        'TITLE' :
                        'NORMAL')), (node.textDecoration == 'UNDERLINE' ?
                'UNDERLINE' :
                node.textDecoration == 'STRIKETHROUGH' ?
                    'MIDDLELINE' :
                    'NONE'), new LineHeight_1.default(node.lineHeightValue, (node.lineHeightUnit == "PERCENT" ?
                'PERCENTAGE' :
                'PIXEL')), node.paragraphIndent);
        }
        else
            return null;
    }
}
exports.default = FigmaFactory;
