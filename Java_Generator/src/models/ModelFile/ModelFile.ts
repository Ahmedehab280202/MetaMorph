import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";
import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";
import ModelProp from "./ModelProp";
export default class ModelFile {
  private class_name: String;
  private prop_nodes: PropNode[];

  constructor(class_node: ClassNode) {
    this.class_name = class_node.name;
    this.prop_nodes = class_node.prop_nodes;
  }
  toString() {
   return( `
        package com.meta.model;
        import jakarta.persistence.*;
        import lombok.*;

        @Entity
        @Data
        @AllArgsConstructor
        @NoArgsConstructor
        public class ${this.class_name} {
            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private int id;
            ${this.prop_nodes.map(prop => new ModelProp(prop).toString()).join('')}
        }
    `
  )
  }
}
/* package com.meta.model;
import jakarta.persistence.;
import lombok.;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
    private String name ;
} */
