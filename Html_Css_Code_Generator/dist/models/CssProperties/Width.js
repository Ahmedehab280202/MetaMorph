"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Width {
    constructor(width_node) {
        switch (width_node.mode) {
            case 'FIXED':
                this.value = width_node.value;
                this.unit = 'px';
                break;
            case 'STRETCH':
                this.value = 100;
                this.unit = '%';
            default:
                this.value = 'auto';
                this.unit = '';
                break;
        }
    }
    toString() {
        return `width: ${this.value}${this.unit};`;
    }
}
exports.default = Width;
