import { GradientPaint } from "./Design/GradientPaint"
import SolidPaint from "./Design/SolidPaint"
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
type Paint = SolidPaint | GradientPaint
type GradientType = 'GRADIENT_LINEAR' | 'GRADIENT_RADIAL' | 'GRADIENT_ANGULAR' | 'GRADIENT_DIAMOND'
type ShadowType = 'DROPSHADOW' | 'INNERSHADOW'

// Typography
type FontStyle = 'NORMAL' | 'ITALIC'
type LetterCase = 'NORMAL' | 'UPPER' | 'LOWER' | 'TITLE'
type TextDecoration = 'NONE' | 'UNDERLINE' | 'MIDDLELINE' | 'OVERLINE'
type LineHeightUnit = 'PIXEL' | 'PERCENTAGE'

export {GradientType,Paint,ApiName,NodeType,LayoutStructure,LayoutMode,AxisDirection,AxisMode,DimensionUnit,DimensionMode,/* PaintType, */ShadowType,FontStyle,LetterCase,TextDecoration,LineHeightUnit}