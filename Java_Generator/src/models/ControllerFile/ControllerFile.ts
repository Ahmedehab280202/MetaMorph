import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";
import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";
import ControllerProp from "./ControllerProp";
export default class ModelFile {
    private class_name: String;
    constructor(class_node: ClassNode) {
        this.class_name = class_node.name;
    }
    toString() {
        return (`
package com.meta.controller;
import org.springframework.web.bind.annotation.;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.meta.model.;
import com.meta.service.*;
    @RestController
    @RequestMapping("/${this.class_name}")
    public class ${this.class_name}Controller {
    @Autowired
    private ${this.class_name}Service ${this.class_name}Service;
    @GetMapping
    public List<${this.class_name}> getAll${this.class_name}s() {
        return ${this.class_name}Service.getAll${this.class_name}s();
    }
    @GetMapping("/{id}")
    public ${this.class_name} get${this.class_name}ById(@PathVariable Integer id) {
        return ${this.class_name}Service.get${this.class_name}ById(id);
    }
    @PostMapping("/{add}")
    public void create${this.class_name}(@RequestBody ${this.class_name} ${this.class_name}) {
        ${this.class_name}Service.create${this.class_name}(${this.class_name});
    }
    @PutMapping("/{id}")
    public void update${this.class_name}(@PathVariable Integer id, @RequestBody ${this.class_name} ${this.class_name}) {
        ${this.class_name}Service.update${this.class_name}(id, this.class_name);${this.class_name}
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Integer id) {
        ${this.class_name}Service.delete${this.class_name}(id);
    }
    `
        )
    }
}
