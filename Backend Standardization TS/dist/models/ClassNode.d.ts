import MethodNode from "./MethodNode";
import PropNode from "./PropNode";
import { LucidCsv } from "./types";
export default class ClassNode {
    readonly id: String;
    readonly name: String;
    readonly prop_nodes: PropNode[];
    readonly method_nodes: MethodNode[];
    constructor(lucid_node: LucidCsv);
    newLineSlicer(inputString: String): String[];
}
