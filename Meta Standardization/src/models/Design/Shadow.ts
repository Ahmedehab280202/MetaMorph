import Vector from "../Layout/Vector"
import { ShadowType } from "../types"
import Paint from "./Paint"

export default class Shadow {
  readonly type : ShadowType
  readonly colour : Paint
  readonly offset : Vector
  readonly radius : number

  constructor(type : ShadowType, colour : Paint, offset : Vector, radius : number){
    this.type = type
    this.colour = colour
    this.offset = offset
    this.radius = radius
  }
}