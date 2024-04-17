import { AxisDirection, AxisMode } from "../../types/types";
export default class Axis {
    readonly direction: AxisDirection;
    readonly alignMode: AxisMode;
    readonly spacing: number;
    constructor(direction: AxisDirection, alignMode: AxisMode, spacing: number);
}
