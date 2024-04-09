import { DimensionMode, DimensionUnit } from "../../types/types";
export default class Dimension {
    readonly value: number;
    readonly mode: DimensionMode;
    readonly unit: DimensionUnit;
    constructor(value: number, mode: DimensionMode, unit: DimensionUnit);
}
