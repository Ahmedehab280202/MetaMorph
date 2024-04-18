"use strict";
const selectLayer = figma.currentPage.selection[0];

const jsonProcess = (node: any) => ({
  id: node.id,
  name: node.name,
  layout: {
    x: node.x,
    y: node.y,
    layoutMode: node.layoutMode,
    primaryAxisAlignItems: node.primaryAxisAlignItems,
    counterAxisAlignItems: node.counterAxisAlignItems,
    itemSpacing: node.itemSpacing,
  },
  box: {
    width: node.width,
    height: node.height,
    parentLayoutMode: node.parentLayoutMode,
    parentNodeType: node.parentNodeType,
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

console.log('selectLayer:');
console.log(selectLayer);
console.log(JSON.stringify(jsonProcess(selectLayer)));
