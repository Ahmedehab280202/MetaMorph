import { RGB } from "./RGBA";

export default class SolidPaint {
  readonly type: 'SOLID';
  readonly color: RGB;

  constructor(type: 'SOLID', color: RGB) {
    this.type = type;
    this.color = color;
  }
}