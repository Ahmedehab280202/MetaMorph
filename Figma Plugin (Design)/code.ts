"use strict";
const selectLayer = figma.currentPage.selection[0];

/* console.log('selectLssayer:');
console.log(selectLayer); */

const jsonProcess = (node: any) => ({
  id: node.id,
  name: node.name,
  node_type: node.type,
  text_content: node.characters,
  typography: {
    textCase: node.textCase,
    fontFamily: node.fontName?.family,
    fontStyle: node.fontName?.style,
    isItalic: node.fontName?.style.includes("Italic"),
    fontSize: node.fontSize,
    textDecoration: node.textDecoration,
    lineHeightValue: node.lineHeight?.value,
    lineHeightUnit: node.lineHeight?.unit,
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
    letterSpacingValue: node.letterSpacing?.value,
    letterSpacingUnit: node.letterSpacing?.unit,
  },
  box: {
    width: node.width,
    height: node.height,
    parentLayoutMode: node.parent?.layoutMode,
    parentNodeType: node.parent?.type,
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
  children: (
    node.children ?
      node.children.map((child: any) => {
        return jsonProcess(child);
      }) : null 
  )
})

console.log('select_layer:',jsonProcess(selectLayer));
figma.showUI(__html__)
figma.ui.postMessage(jsonProcess(selectLayer));



/* 

*/