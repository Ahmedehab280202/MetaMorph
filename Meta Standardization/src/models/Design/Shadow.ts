import Vector from "../Layout/Vector"
import { RGBA } from "./RGBA"

export default class Shadow {
  readonly type : 'DROPSHADOW' | 'INNERSHADOW'
  readonly colour : RGBA
  readonly offset : Vector
  readonly radius : number
  readonly spread: number

  constructor(type : 'DROPSHADOW' | 'INNERSHADOW', colour : RGBA, offset : Vector, radius : number, spread: number){
    this.type = type
    this.colour = colour
    this.offset = offset
    this.radius = radius
    this.spread = spread
  }
}