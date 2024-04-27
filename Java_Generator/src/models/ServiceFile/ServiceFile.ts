import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";

export default class ModelFile {
    private class_name: String;
    constructor(class_node: ClassNode) {
        this.class_name = class_node.name;
    }
    toString() {
        return (`
package com.meta.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;
import com.meta.repository.${this.class_name}Repository;
import com.meta.model.${this.class_name};
@Service
public class ${this.class_name}Service {
    @Autowired
    private ${this.class_name}Repository ${this.class_name}Repository;
    public List<${this.class_name}> getAll${this.class_name}s() {
        return ${this.class_name}Repository.findAll();
    }
    public ${this.class_name} get${this.class_name}ById(Integer id) {
        Optional < ${this.class_name} > result = ${this.class_name}Repository.findById(id);
        return result.orElse(null);
    }
    public void create${this.class_name}(${this.class_name} ${this.class_name}) {
        ${this.class_name}Repository.save(${this.class_name});
    }
    public ${this.class_name} update${this.class_name}(Integer id, ${this.class_name} ${this.class_name}) {
        try {
            ${this.class_name} ${this.class_name}Found = ${this.class_name}Repository.findById(id).orElse(null);
            if (${this.class_name}Found == null) return null;
            ${this.class_name}Repository.save(${this.class_name});
            return ${this.class_name};
        }
        catch (Exception e) {
            return null;
        }
    }
    public void delete${this.class_name}(Integer id) {
        ${this.class_name}Repository.deleteById(id);
    }
}
    `
        )
    }
}




