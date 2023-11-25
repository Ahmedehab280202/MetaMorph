type ApiName = 'FIGMA'
type NodeType = 'LAYOUT' | 'TEXT'

// Layout
type LayoutStructure = AbsoluteLayout | LinearLayout | GridLayout
type LayoutMode = 'LINEAR' | 'ABSOLUTE' | 'GRID'
type AxisDirection = 'HORIZONTAL' | 'VERTICAL'
type AxisMode = 'MIN' | 'CENTER' | 'MAX'

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