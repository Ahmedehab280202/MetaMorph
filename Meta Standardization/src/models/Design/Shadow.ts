import Vector from "../Layout/Vector"
import { ShadowType } from "../types"
import { RGBA } from "./RGBA"
import Paint from "./SolidPaint"

export default class Shadow {
  readonly type : ShadowType
  readonly colour : RGBA
  readonly offset : Vector
  readonly radius : number
  readonly spread: number

  constructor(type : ShadowType, colour : RGBA, offset : Vector, radius : number, spread: number){
    this.type = type
    this.colour = colour
    this.offset = offset
    this.radius = radius
    this.spread = spread
  }
}