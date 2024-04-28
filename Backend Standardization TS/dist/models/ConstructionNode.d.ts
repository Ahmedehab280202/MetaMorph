import { AccessModifier } from "../types";
import ClassNode from "./ClassNode";
import PropNode from "./PropNode";
import RelationshipNode from "./RelationshipNode";
export default class ConstructionNode {
    modifier: AccessModifier;
    name: String;
    param_nodes: PropNode[];
    init_nodes: PropNode[];
    parent_nodes: PropNode[];
    constructor(modifier: AccessModifier, name: String, prop_nodes: PropNode[]);
    setRelationships(rel_arr: RelationshipNode[], parent_node: ClassNode | null): void;
}
