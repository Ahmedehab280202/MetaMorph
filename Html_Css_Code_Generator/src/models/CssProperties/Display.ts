import { LayoutMode } from "metamorph-lib/Meta Standardization/dist/types/types";
import { DisplayType } from "../../types";

export default class Display {
  readonly value: DisplayType

  constructor(mode: LayoutMode) {
    this.value = (
      mode == 'LINEAR' || mode == 'TEXT'
      ? 'flex' :
      mode == 'GRID'
      ? 'grid' :
      'none'
    )
  }

  toString() {
    return `display: ${this.value};`
  }
}