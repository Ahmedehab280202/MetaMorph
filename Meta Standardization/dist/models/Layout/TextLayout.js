"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TextLayout {
    constructor(horizontal_align, vertical_align, letter_spacing_value, letter_spacing_unit) {
        this.horizontal_align = horizontal_align,
            this.vertical_align = vertical_align,
            this.letter_spacing_value = letter_spacing_value,
            this.letter_spacing_unit = letter_spacing_unit;
    }
}
exports.default = TextLayout;
