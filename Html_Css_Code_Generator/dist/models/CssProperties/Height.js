"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Height {
    constructor(height_node) {
        switch (height_node.mode) {
            case 'FIXED':
                this.value = height_node.value;
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
        return `height: ${this.value}${this.unit};`;
    }
}
exports.default = Height;
