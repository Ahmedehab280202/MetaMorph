import Dimension from "./Dimension"
import LTRB from "./LTRB"

export default class BoxModel {
  readonly width : Dimension
  readonly height : Dimension
  readonly padding : LTRB

  constructor(width : Dimension, height : Dimension, padding : LTRB){
    this.width = width
    this.height = height
    this.padding = padding
  }
}



