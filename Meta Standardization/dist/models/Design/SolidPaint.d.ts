import { RGBA } from "./RGBA";
export default class SolidPaint {
    readonly type: 'SOLID';
    readonly color: RGBA;
    constructor(type: 'SOLID', color: RGBA);
}
