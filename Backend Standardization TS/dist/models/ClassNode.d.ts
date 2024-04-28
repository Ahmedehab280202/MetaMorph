import { LucidCsv, NodeType } from "../types";
import ConstructionNode from "./ConstructionNode";
import DeclarationNode from "./DeclarationNode";
import MethodNode from "./MethodNode";
import PropNode from "./PropNode";
import RelationshipNode from "./RelationshipNode";
export default class ClassNode {
    id: String;
    type: NodeType;
    name: String;
    declaration: DeclarationNode;
    construction: ConstructionNode;
    parent_node: ClassNode | null;
    prop_nodes: PropNode[];
    method_nodes: MethodNode[];
    relationships: RelationshipNode[];
    constructor(lucid_node: LucidCsv);
    newLineSlicer(inputString: String): String[];
    setParentNode(parent_node: ClassNode): void;
    updateConstructor(): void;
}
