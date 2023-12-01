import Dimension from "./Dimension"
import LTRB from "./LTRB"

export default class BoxModel {
  readonly width : Dimension
  readonly height : Dimension
  readonly padding : LTRB
  readonly margin : LTRB

  constructor(width : Dimension, height : Dimension, padding : LTRB, margin : LTRB){
    this.width = width
    this.height = height
    this.padding = padding
    this.margin = margin
  }
}