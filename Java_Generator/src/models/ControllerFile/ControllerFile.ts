import ClassNode from "metamorph-lib/Backend Standardization TS/dist/models/ClassNode";
import PropNode from "metamorph-lib/Backend Standardization TS/dist/models/PropNode";

export default class ControllerFile {
    public class_name: String;
    public class_name_lc: String;

    constructor(class_node: ClassNode) {
        this.class_name = class_node.name;
        this.class_name_lc = class_node.name.toLowerCase();
    }
    toString() {
        return (`
package com.meta.${this.class_name_lc};
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
public class ${this.class_name}Controller {
    @Autowired
    private ${this.class_name}Service ${this.class_name_lc}Service;

    @GetMapping("/${this.class_name_lc}")
    public List<${this.class_name}> getAll${this.class_name}s() {
        return ${this.class_name_lc}Service.getAll${this.class_name}s();
    }
    
    @GetMapping("/${this.class_name_lc}/{id}")
    public ${this.class_name} get${this.class_name}(@PathVariable UUID id) {
        return ${this.class_name_lc}Service.get${this.class_name}(id);
    }

    @PostMapping("/${this.class_name_lc}")
    public void add${this.class_name}(@RequestBody ${this.class_name} ${this.class_name_lc}) {
        ${this.class_name_lc}Service.add${this.class_name}(${this.class_name_lc});
    }

    @PutMapping("/${this.class_name_lc}/{id}")
    public void update${this.class_name}(@RequestBody ${this.class_name} ${this.class_name_lc}, @PathVariable UUID id) {
        ${this.class_name_lc}Service.update${this.class_name}(id, ${this.class_name_lc});
    }

    @DeleteMapping("/${this.class_name_lc}/{id}")
    public void delete${this.class_name}(@PathVariable UUID id) {
        ${this.class_name_lc}Service.delete${this.class_name}(id);
    }
}
`
        )
    }
}
