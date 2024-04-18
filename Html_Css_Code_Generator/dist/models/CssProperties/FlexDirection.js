"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FlexDirection {
    constructor(primary_axis) {
        this.value = (primary_axis.direction == 'HORIZONTAL'
            ? 'row' :
            /* primary_axis.direction == 'VERTICAL' */
            'column');
    }
    toString() {
        return `flex-direction: ${this.value};`;
    }
}
exports.default = FlexDirection;
