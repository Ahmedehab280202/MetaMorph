import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";

export default class ModelFile {
    private class_name: String;
    constructor(class_node: ClassNode) {
        this.class_name = class_node.name;
    }
    toString() {
        return (`
package com.meta.${this.class_name.toLowerCase()};
import java.util.UUID;
import org.springframework.data.repository.CrudRepository;

    public interface ${this.class_name}Repository extends CrudRepository<${this.class_name}, UUID> {
    }
`
        )
    }
}







