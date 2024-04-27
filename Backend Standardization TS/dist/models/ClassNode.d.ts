import MethodNode from "./MethodNode";
import PropNode from "./PropNode";
import RelationshipNode from "./RelationshipNode";
import { LucidCsv } from "./types";
export default class ClassNode {
    readonly id: String;
    readonly type: String;
    readonly name: String;
    parent_node: ClassNode | null;
    readonly prop_nodes: PropNode[];
    readonly method_nodes: MethodNode[];
    relationships: RelationshipNode[];
    constructor(lucid_node: LucidCsv);
    newLineSlicer(inputString: String): String[];
}
