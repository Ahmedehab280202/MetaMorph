// Figma Plugin Api
export type FrameNode = {
  x: number,
  y: number,

  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL',
  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  itemSpacing: number
}

export type FrameLayout = {
  x: number,
  y: number,

  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL',
  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  itemSpacing: number
}

export type FrameBox = {
  width: number,
  height: number,

  parentLayoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL'
  parentNodeType: 'NONE' | 'FRAME'
  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL',
  layoutGrow: 0 | 1
  layoutAlign: 'STRETCH' | 'INHERIT'
  primaryAxisSizingMode: 'FIXED' | 'AUTO',
  counterAxisSizingMode: 'FIXED' | 'AUTO',

  paddingLeft: number,
  paddingTop: number,
  paddingRight: number,
  paddingBottom: number,

}