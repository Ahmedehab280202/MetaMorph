import { GradientPaint } from "../models/Design/GradientPaint"
import SolidPaint from "../models/Design/SolidPaint"
import AbsoluteLayout from "../models/Layout/AbsoluteLayout"
import GridLayout from "../models/Layout/GridLayout"
import LinearLayout from "../models/Layout/LinearLayout"
import TextLayout from "../models/Layout/TextLayout"

type ApiName = 'FIGMA'
type NodeType = 'FRAME' | 'TEXT'

// Layout
type LayoutStructure = AbsoluteLayout | LinearLayout | GridLayout | TextLayout
type LayoutMode = 'LINEAR' | 'ABSOLUTE' | 'GRID' | 'TEXT'
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

/* type ElementType = 'div' | 'btn' | 'form' | 'input' */

export {GradientType,Paint,ApiName,NodeType,LayoutStructure,LayoutMode,AxisDirection,AxisMode,DimensionUnit,DimensionMode,/* PaintType, */FontStyle,LetterCase,TextDecoration,LineHeightUnit}