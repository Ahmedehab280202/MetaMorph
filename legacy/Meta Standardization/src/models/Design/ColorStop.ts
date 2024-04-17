import { RGBA } from "./RGBA";

export class ColorStop {
  readonly position: number
  readonly color: RGBA

  constructor(pos: number, clr: RGBA) {
    this.position = pos;
    this.color = clr;
  }
}

