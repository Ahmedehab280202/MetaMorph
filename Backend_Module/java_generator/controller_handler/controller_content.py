def generate_controller_content(diagram_class):

    #    idtype = diagram_class.prop_nodes[0]["dtype"]
    #    if idtype == "string":
 #       idtype = "String"
    idtype = "Integer"
    content = f"package com.{diagram_class.project_name}.controller;\n"
    content += f"import org.springframework.web.bind.annotation.*;\n"
    content += f"import java.util.List;\n"
    content += f"import org.springframework.beans.factory.annotation.Autowired;\n"
# content += f"import com{diagram_class.project_name}Service.{diagram_class.name};\n"
# content += f"import com{diagram_class.project_name}model.{diagram_class.name};\n"
    content += f"import com.{diagram_class.project_name}.model.*;\n"
    content += f"import com.{diagram_class.project_name}.service.*;\n"

    content += f"@RestController\n"
    content += f"@RequestMapping(\"/{diagram_class.name.lower()}\")\n"
    content += f"public class {diagram_class.name}Controller {{\n"

    content += f"    @Autowired\n"
    content += f"    private {diagram_class.name}Service {
        diagram_class.name.lower()}Service;\n"

# Add controller methods
    content += f"    @GetMapping\n"
    content += f"    public List<{diagram_class.name}> getAll{
        diagram_class.name}s() {{\n"
    content += f"        return {diagram_class.name.lower()
                                 }Service.getAll{diagram_class.name}s();\n"
    content += f"    }}\n"

    content += f"    @GetMapping(\"/{{id}}\")\n"
    content += f"    public {diagram_class.name} get{
        diagram_class.name}ById(@PathVariable {idtype} id) {{\n"
    content += f"        return {diagram_class.name.lower()
                                 }Service.get{diagram_class.name}ById(id);\n"
    content += f"    }}\n"

    content += f"    @PostMapping(\"/{{add}}\")\n"
    content += f"    public void create{diagram_class.name}(@RequestBody {
        diagram_class.name} {diagram_class.name.lower()}) {{\n"
    content += f"        {diagram_class.name.lower()}Service.create{
        diagram_class.name}({diagram_class.name.lower()});\n"
    content += f"    }}\n"

    content += f"    @PutMapping(\"/{{id}}\")\n"
    content += f"    public void update{diagram_class.name}(@PathVariable {
        idtype} id, @RequestBody {diagram_class.name} {diagram_class.name.lower()}) {{\n"
    content += f"        {diagram_class.name.lower()}Service.update{
        diagram_class.name}(id, {diagram_class.name.lower()});\n"
    content += f"    }}\n"

    content += f"    @DeleteMapping(\"/{{id}}\")\n"
    content += f"    public void delete{
        diagram_class.name}(@PathVariable {idtype} id) {{\n"
    content += f"        {diagram_class.name.lower()
                          }Service.delete{diagram_class.name}(id);\n"
    content += f"    }}\n"

    content += f"}}\n"

    return content
