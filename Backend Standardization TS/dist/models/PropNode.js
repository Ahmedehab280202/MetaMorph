"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PropNode {
    constructor(text_area) {
        this.modifier = text_area.match(/[+\-]/)?.[0] || '';
        this.name = text_area.match(/\b(\w+)\b/)?.[1] || '';
        this.dtype = text_area.match(/:\s*([^=\s]+)/)?.[1] || '';
        this.default_val = text_area.match(/=\s*([^=\s]+)/)?.[1] || '';
    }
}
exports.default = PropNode;
