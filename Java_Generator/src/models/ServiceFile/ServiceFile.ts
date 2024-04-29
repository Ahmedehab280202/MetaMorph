import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";

export default class ModelFile {
    private class_name: String;
    public class_name_lc: String;
    constructor(class_node: ClassNode) {
        this.class_name = class_node.name;
        this.class_name_lc = class_node.name.toLowerCase();
    }
    toString() {
        return (`
package com.meta.${this.class_name_lc};

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ${this.class_name}Service {

    @Autowired
    private ${this.class_name}Repository ${this.class_name_lc}Repository;

    public List<${this.class_name}> getAll${this.class_name}s() {
        List<${this.class_name}> ${this.class_name_lc}s = new ArrayList<>();
        ${this.class_name_lc}Repository.findAll().forEach(${this.class_name_lc}s::add);        
        return ${this.class_name_lc}s;
    }

    public ${this.class_name} get${this.class_name}(UUID id) {
        Optional<${this.class_name}> optional${this.class_name} = ${this.class_name_lc}Repository.findById(id);
        return optional${this.class_name}.orElse(null);
    }

    public void add${this.class_name}(${this.class_name} ${this.class_name_lc}) {
        ${this.class_name_lc}Repository.save(${this.class_name_lc});
    }

    public void update${this.class_name}(UUID id, ${this.class_name} ${this.class_name_lc}) {
        ${this.class_name_lc}Repository.save(${this.class_name_lc});
    }

    public void delete${this.class_name}(UUID id) {
        ${this.class_name_lc}Repository.deleteById(id);
    }
}
`
        )
    }
}




