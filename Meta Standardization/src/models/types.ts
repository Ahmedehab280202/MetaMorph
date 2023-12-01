import AbsoluteLayout from "./Layout/AbsoluteLayout"
import GridLayout from "./Layout/GridLayout"
import LinearLayout from "./Layout/LinearLayout"

type ApiName = 'FIGMA'
type NodeType = 'LAYOUT' | 'TEXT'

// Layout
type LayoutStructure = AbsoluteLayout | LinearLayout | GridLayout
type LayoutMode = 'LINEAR' | 'ABSOLUTE' | 'GRID'
type AxisDirection = 'HORIZONTAL' | 'VERTICAL'
type AxisMode = 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN'

// BoxModel
type DimensionUnit = 'PIXEL' | 'PERCENTAGE' | 'NONE'
type DimensionMode = 'STRETCH' | 'FIXED' | 'AUTO'

// Design
type PaintType = 'SOLID' | 'GRADIENT'
type ShadowType = 'DROPSHADOW' | 'INNERSHADOW'

// Typography
type FontStyle = 'NORMAL' | 'ITALIC'
type LetterCase = 'NORMAL' | 'UPPER' | 'LOWER' | 'TITLE'
type TextDecoration = 'NONE' | 'UNDERLINE' | 'MIDDLELINE' | 'OVERLINE'
type LineHeightUnit = 'PIXEL' | 'PERCENTAGE'

// Figma Plugin Api
type FrameNode = {
  x: number,
  y: number,

  layoutMode: 'NONE' | 'HORIZONTAL' | 'VERTICAL',
  primaryAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  counterAxisAlignItems: 'MIN' | 'MAX' | 'CENTER' | 'SPACE_BETWEEN',
  itemSpacing: number
}

export {ApiName,NodeType,LayoutStructure,LayoutMode,AxisDirection,AxisMode,DimensionUnit,DimensionMode,PaintType,ShadowType,FontStyle,LetterCase,TextDecoration,LineHeightUnit,FrameNode}