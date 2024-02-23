import { GradientPaint } from "../models/Design/GradientPaint"
import SolidPaint from "../models/Design/SolidPaint"
import AbsoluteLayout from "../models/Layout/AbsoluteLayout"
import GridLayout from "../models/Layout/GridLayout"
import LinearLayout from "../models/Layout/LinearLayout"

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

// Typography
type FontStyle = 'NORMAL' | 'ITALIC'
type LetterCase = 'NORMAL' | 'UPPER' | 'LOWER' | 'TITLE'
type TextDecoration = 'NONE' | 'UNDERLINE' | 'MIDDLELINE' | 'OVERLINE'
type LineHeightUnit = 'PIXEL' | 'PERCENTAGE'

export {GradientType,Paint,ApiName,NodeType,LayoutStructure,LayoutMode,AxisDirection,AxisMode,DimensionUnit,DimensionMode,/* PaintType, */FontStyle,LetterCase,TextDecoration,LineHeightUnit}