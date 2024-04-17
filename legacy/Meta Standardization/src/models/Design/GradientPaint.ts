import {GradientType} from '../../types/types'
import {ColorStop} from './ColorStop'
export class GradientPaint {
  readonly type: GradientType
  readonly gradientTransform: Object
  readonly gradientStops: ReadonlyArray<ColorStop>

  constructor(type: GradientType, gradientTransform: Object, gradientStops: ReadonlyArray<ColorStop>){
    this.type = type;
    this.gradientTransform = gradientTransform;
    this.gradientStops = gradientStops;
  }
}