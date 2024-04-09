import { FontStyle, LetterCase } from "../../types/types";
export default class Font {
    readonly family: string;
    readonly style: FontStyle;
    readonly weight: number;
    readonly size: number;
    readonly letterCase: LetterCase;
    constructor(family: string, style: FontStyle, weight: number, size: number, letterCase: LetterCase);
}
