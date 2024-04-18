export default class TextLayout {
    readonly horizontal_align: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED';
    readonly vertical_align: 'TOP' | 'CENTER' | 'BOTTOM';
    readonly letter_spacing_value: number;
    readonly letter_spacing_unit: "PIXELS" | "PERCENT";
    constructor(horizontal_align: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED', vertical_align: 'TOP' | 'CENTER' | 'BOTTOM', letter_spacing_value: number, letter_spacing_unit: "PIXELS" | "PERCENT");
}
