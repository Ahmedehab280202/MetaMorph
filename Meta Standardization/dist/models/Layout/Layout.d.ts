import { LayoutMode, LayoutStructure } from "../../types/types";
export default class Layout {
    readonly mode: LayoutMode;
    readonly structure: LayoutStructure;
    constructor(mode: LayoutMode, structure: LayoutStructure);
}
