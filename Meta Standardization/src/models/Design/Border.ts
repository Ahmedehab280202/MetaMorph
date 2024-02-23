import { Paint } from "../../types/types"
import LTRB_Edges from "./LTRB_Edges"


export default class Border {
  readonly weight : number
  readonly colour : ReadonlyArray<Paint>
  readonly radius : LTRB_Edges

  constructor(weight : number, colour : ReadonlyArray<Paint>, radius : LTRB_Edges) {
    this.weight = weight
    this.colour = colour
    this.radius = radius
  }
}