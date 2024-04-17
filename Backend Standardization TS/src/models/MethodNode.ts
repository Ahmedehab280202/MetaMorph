export default class MethodNode {
  readonly modifier: String
  readonly name: String
  readonly dtype: String
  readonly params: String

  constructor(text_area: String) {
    this.modifier = text_area.match(/[+\-]/)?.[0] || ''
    this.name = text_area.match(   /\b(\w+)\b/   )?.[1] || ''
    this.dtype = text_area.match(   /:\s*([^=\s]+)/   )?.[1] || ''
    this.params = text_area.match(   /\((.*?)\)/   )?.[1] || ''
  }
}