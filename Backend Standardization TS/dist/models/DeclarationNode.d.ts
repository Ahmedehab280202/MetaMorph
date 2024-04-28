import { AccessModifier, NodeExtension, NodeType } from "../types";
import ClassNode from "./ClassNode";
export default class DeclarationNode {
    access: AccessModifier;
    type: NodeType;
    name: String;
    parent_name: String | null;
    parent_type: NodeType | null;
    extension: NodeExtension | '';
    constructor(access: AccessModifier, type: NodeType, name: String);
    setParentNode(parent_node: ClassNode): void;
}
