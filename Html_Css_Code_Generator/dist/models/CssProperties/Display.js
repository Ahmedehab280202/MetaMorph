"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Display {
    constructor(mode) {
        this.value = (mode == 'LINEAR'
            ? 'flex' :
            mode == 'GRID'
                ? 'grid' :
                'none');
    }
    toString() {
        return `display: ${this.value};`;
    }
}
exports.default = Display;
