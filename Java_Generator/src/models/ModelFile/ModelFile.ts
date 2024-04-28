import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";
import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";
import ModelProp from "./ModelProp";
import ModelGetMethod from "./ModelGetMethod";
import ModelSetMethod from "./ModelSetMethod";
import ModelConstructor from "./ModelConstructor";
import ModelInterface from "./ModelInterface";
import MethodNode from "metamorph-lib/Backend Standardization TS/dist/models/MethodNode";
import RelationshipNode from "metamorph-lib/Backend Standardization TS/dist/models/RelationshipNode";
import ModelMethod from "./ModelMethod";
import { NodeType } from "metamorph-lib/Backend Standardization TS/dist/types";
import DeclarationNode from "metamorph-lib/Backend Standardization TS/dist/models/DeclarationNode";
import ConstructionNode from "metamorph-lib/Backend Standardization TS/dist/models/ConstructionNode";

export default class ModelFile {
  public class_name: String;
  public type: NodeType
  public declaration: DeclarationNode;
  public prop_nodes: PropNode[];
  public construction: ConstructionNode;
  public method_nodes: MethodNode[];
  public parent_node: ClassNode | null
  public relationships: RelationshipNode[]

  constructor(class_node: ClassNode) {
    this.class_name = class_node.name;
    this.type= class_node.type
    this.declaration= class_node.declaration
    this.prop_nodes = class_node.prop_nodes;
    this.construction = class_node.construction
    this.method_nodes = class_node.method_nodes
    this.parent_node = class_node.parent_node
    this.relationships = class_node.relationships
  }

  toString() {
    if (this.type == 'interface') {
      return new ModelInterface(this.class_name, this.method_nodes).toString()
    }

   return(
      [
        `package com.meta.model;`,
        `import jakarta.persistence.*;`,
        `import lombok.*;`,
        ``,
        `@Entity`,
        `public class ${this.declaration.name} ${this.declaration.extension} ${this.declaration.parent_name || ''}{`,
        `    @Id`,
        `    @GeneratedValue`,
        `    private UUID id;`,
        `    ${this.prop_nodes.map(prop => new ModelProp(prop).toString()).join('    ')}`,
        `${new ModelConstructor(this.construction).toString()}`,
        `${this.prop_nodes.map(prop => new ModelGetMethod(prop).toString()).join('')}`,
        `${this.prop_nodes.map(prop => new ModelSetMethod(prop).toString()).join('')}`,
        `${this.method_nodes.map(method => new ModelMethod(method).toString()).join('')}`,
        `}`
      ].join('\n')
    )
  }
}