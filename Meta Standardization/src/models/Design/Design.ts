import Border from "./Border"
import Shadow from "./Shadow"
import { Blur } from "./Blur"
import { Paint } from "../types"

export default class Design {
  readonly background : ReadonlyArray<Paint>
  readonly border : Border
  readonly shadow : ReadonlyArray<Shadow>
  readonly blur: ReadonlyArray<Blur>

  constructor(background : ReadonlyArray<Paint>, border : Border, shadow : ReadonlyArray<Shadow>, blur: ReadonlyArray<Blur>){
    this.background = background
    this.border = border
    this.shadow = shadow
    this.blur = blur
  }
}