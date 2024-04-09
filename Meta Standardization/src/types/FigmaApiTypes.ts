import { Blur } from "../models/Design/Blur"
import Shadow from "../models/Design/Shadow"
import { Paint } from "./types"


// Figma Plugin Api
export type FigmaNode = {
  id: string,
  name: string,
  node_type: 'FRAME' | 'TEXT'
  text_content: string

  typography: FigmaTypography
  layout: FigmaLayout
  box: FigmaBox
  design: FigmaDesign
  children: Array<FigmaNode>
}

export type FigmaLayout = {
  x: number,
  y: number,

  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL',
  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  itemSpacing: number

  textAlignHorizontal: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED',
  textAlignVertical: 'TOP' | 'CENTER' | 'BOTTOM',
  letterSpacingValue: number,
  letterSpacingUnit: "PIXELS" | "PERCENT"
}

export type FigmaTypography = {
  textCase: "ORIGINAL" | "UPPER" | "LOWER" | "TITLE" | "SMALL_CAPS" | "SMALL_CAPS_FORCED",
  fontFamily: string,
  fontStyle: string,
  isItalic: Boolean,
  fontSize: number,
  textDecoration: "NONE" | "UNDERLINE" | "STRIKETHROUGH",
  lineHeightValue: number,
  lineHeightUnit: "PIXELS" | "PERCENT" | "AUTO",
  paragraphIndent: number
}

export type FigmaBox = {
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

export type FigmaDesign = {
  fills: ReadonlyArray<Paint>
  strokes: ReadonlyArray<Paint>
  effects: ReadonlyArray<Shadow | Blur>

  strokeWeight: number
  topLeftRadius: number
  topRightRadius: number
  bottomRightRadius: number
  bottomLeftRadius: number
}