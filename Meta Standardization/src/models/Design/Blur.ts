export class Blur {
  readonly type: 'LAYER_BLUR' | 'BACKGROUND_BLUR';
  readonly radius: number;

  constructor(type: 'LAYER_BLUR' | 'BACKGROUND_BLUR', radius: number) {
    this.type = type;
    this.radius = radius;
  }
}