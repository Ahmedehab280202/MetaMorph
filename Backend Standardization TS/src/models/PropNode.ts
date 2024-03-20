export default class PropNode {
  readonly modifier: String
  readonly name: String
  readonly dtype: String
  readonly default_val: String

  constructor(text_area: String) {
    this.modifier = text_area.match(/[+\-]/)?.[0] || ''
    this.name = text_area.match(/\b(\w+)\b/)?.[1] || ''
    this.dtype = text_area.match(/:\s*([^=\s]+)/)?.[1] || ''
    this.default_val = text_area.match(/=\s*([^=\s]+)/)?.[1] || ''
  }
}