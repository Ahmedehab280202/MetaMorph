import { LucidCsv } from "../types";
import ClassNode from "./ClassNode";
export default class DiagramNode {
    readonly name: String;
    readonly class_nodes: ClassNode[];
    constructor(csv_arr: LucidCsv[]);
    relashionshipIterator(lines: LucidCsv[], class_arr: ClassNode[]): ClassNode[];
}
