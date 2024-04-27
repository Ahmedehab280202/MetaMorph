import ClassNode from "./ClassNode";
import { LucidCsv } from "./types";
export default class DiagramNode {
    readonly name: String;
    readonly class_nodes: ClassNode[];
    constructor(csv_arr: LucidCsv[]);
    relashionshipIterator(rel_arr: LucidCsv[], class_arr: ClassNode[]): ClassNode[];
}
