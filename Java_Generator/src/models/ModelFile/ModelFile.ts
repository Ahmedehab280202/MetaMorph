import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";
import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";
import ModelProp from "./ModelProp";
import ModelGetMethod from "./ModelGetMethod";
import ModelSetMethod from "./ModelSetMethod";
import ModelConstructor from "./ModelConstructor";
import ModelInterface from "./ModelInterface";
import MethodNode from "metamorph-lib/Backend Standardization TS/dist/models/MethodNode";
import RelationshipNode from "metamorph-lib/Backend Standardization TS/dist/models/RelationshipNode";

export default class ModelFile {
  private class_name: String;
  private type: String
  private prop_nodes: PropNode[];
  private method_nodes: MethodNode[];
  private parent_node: ClassNode | null
  private relationships: RelationshipNode[]
  constructor(class_node: ClassNode) {
    this.class_name = class_node.name;
    this.type= class_node.type
    this.prop_nodes = class_node.prop_nodes;
    this.method_nodes = class_node.method_nodes
    this.parent_node = class_node.parent_node
    this.relationships = class_node.relationships
  }

  toString() {
    if (this.type == 'Interface') {
      return new ModelInterface(this.class_name, this.method_nodes).toString()
    }

    const parent_extension: String= (
      this.parent_node?.type == 'Class'
      ? `extends ${this.parent_node.name}`
      : this.parent_node?.type == 'Interface'
      ? `implements ${this.parent_node.name}`
      : ''
    );

   return(
      [
        `package com.meta.model;`,
        `import jakarta.persistence.*;`,
        `import lombok.*;`,
        ``,
        `@Entity`,
        `public class ${this.class_name} ${parent_extension}{`,
        `    @Id`,
        `    @GeneratedValue`,
        `    private UUID id;`,
        `    ${this.prop_nodes.map(prop => new ModelProp(prop).toString()).join('    ')}`,
        ``,
        ``,
        `${new ModelConstructor(this.class_name, this.relationships, this.prop_nodes, this.parent_node?.prop_nodes)}`,
        ``,
        `${this.prop_nodes.map(prop => new ModelGetMethod(prop).toString()).join('')}`,
        ``,
        `${this.prop_nodes.map(prop => new ModelSetMethod(prop).toString()).join('')}`,
        `}`
      ].join('\n')
    )
  }
}