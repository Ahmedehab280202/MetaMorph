import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";

export default class ModelFile {
    private class_name: String;
    constructor(class_node: ClassNode) {
        this.class_name = class_node.name;
    }
    toString() {
        return (`
package com.meta.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.meta.model.*;
import java.util.Optional;
    @Repository
    public interface ${this.class_name}Repository extends JpaRepository<${this.class_name}, Integer> {
    }
    `
        )
    }
}







