import { LayoutMode, LayoutStructure } from "../types";

export default class Layout {
  readonly mode: LayoutMode
  readonly structure: LayoutStructure

  constructor(mode: LayoutMode, structure: LayoutStructure) {
    this.mode = mode;
    this.structure = structure;
  }
}

