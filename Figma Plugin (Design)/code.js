"use strict";
const selectLayer = figma.currentPage.selection[0];
console.log('selectLssayer:');
console.log(selectLayer);
const jsonProcess = (node) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ({
        id: node.id,
        name: node.name,
        node_type: node.type,
        text_content: node.characters,
        typography: {
            textCase: node.textCase,
            fontFamily: (_a = node.fontName) === null || _a === void 0 ? void 0 : _a.family,
            fontStyle: (_b = node.fontName) === null || _b === void 0 ? void 0 : _b.style,
            isItalic: (_c = node.fontName) === null || _c === void 0 ? void 0 : _c.style.includes("Italic"),
            fontSize: node.fontSize,
            textDecoration: node.textDecoration,
            lineHeightValue: (_d = node.lineHeight) === null || _d === void 0 ? void 0 : _d.value,
            lineHeightUnit: (_e = node.lineHeight) === null || _e === void 0 ? void 0 : _e.unit,
            paragraphIndent: node.paragraphIndent
        },
        layout: {
            x: node.x,
            y: node.y,
            layoutMode: node.layoutMode,
            primaryAxisAlignItems: node.primaryAxisAlignItems,
            counterAxisAlignItems: node.counterAxisAlignItems,
            itemSpacing: node.itemSpacing,
            textAlignHorizontal: node.textAlignHorizontal,
            textAlignVertical: node.textAlignVertical,
            letterSpacingValue: (_f = node.letterSpacing) === null || _f === void 0 ? void 0 : _f.value,
            letterSpacingUnit: (_g = node.letterSpacing) === null || _g === void 0 ? void 0 : _g.unit,
        },
        box: {
            width: node.width,
            height: node.height,
            parentLayoutMode: (_h = node.parent) === null || _h === void 0 ? void 0 : _h.layoutMode,
            parentNodeType: (_j = node.parent) === null || _j === void 0 ? void 0 : _j.type,
            layoutMode: node.layoutMode,
            layoutGrow: node.layoutGrow,
            layoutAlign: node.layoutAlign,
            primaryAxisSizingMode: node.primaryAxisSizingMode,
            counterAxisSizingMode: node.counterAxisSizingMode,
            paddingLeft: node.paddingLeft,
            paddingTop: node.paddingTop,
            paddingRight: node.paddingRight,
            paddingBottom: node.paddingBottom,
        },
        design: {
            fills: node.fills,
            strokes: node.strokes,
            effects: node.effects,
            strokeWeight: node.strokeWeight,
            topLeftRadius: node.topLeftRadius,
            topRightRadius: node.topRightRadius,
            bottomRightRadius: node.bottomRightRadius,
            bottomLeftRadius: node.bottomLeftRadius,
        },
        children: (node.children ?
            node.children.map((child) => {
                return jsonProcess(child);
            }) : null)
    });
};
console.log(jsonProcess(selectLayer));
figma.showUI(__html__);
figma.ui.postMessage(jsonProcess(selectLayer));
