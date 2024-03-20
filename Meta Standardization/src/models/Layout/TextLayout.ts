export default class TextLayout {
  readonly horizontal_align: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED'
  readonly vertical_align: 'TOP' | 'CENTER' | 'BOTTOM'
  readonly letter_spacing_value: number
  readonly letter_spacing_unit: "PIXELS" | "PERCENT"

  constructor(
    horizontal_align: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED',
    vertical_align: 'TOP' | 'CENTER' | 'BOTTOM',
    letter_spacing_value: number,
    letter_spacing_unit: "PIXELS" | "PERCENT"
  ) {
    this.horizontal_align = horizontal_align,
    this.vertical_align = vertical_align,
    this.letter_spacing_value = letter_spacing_value,
    this.letter_spacing_unit = letter_spacing_unit
  }
}