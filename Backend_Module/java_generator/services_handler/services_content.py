def generate_services_content(diagram_class):

    # declaration for id type
    idtype = diagram_class.prop_nodes[0]["dtype"]
    if idtype == "int":
        idtype = "Integer"
    elif idtype == "string":
        idtype = "String"

    # import project name  with initializr way
    # content = f"package com.example.{diagram_class.project_name}.demo.service;\n"
    # content += f"import com.example.{diagram_class.project_name}.demo.repository.{diagram_class.name}Repository;\n"
    # content += f"import com.example.{diagram_class.project_name}.demo.model.{diagram_class.name};\n"

    content = f"package com.{diagram_class.project_name}.demo.service;\n"
    content += f"import org.springframework.stereotype.Service;\n"
    content += f"import org.springframework.beans.factory.annotation.Autowired;\n"
    content += f"import java.util.List;\n"
    content += f"import java.util.Optional;\n"
    # import project name and  with default defined way
    content += f"import com.{diagram_class.project_name}.repository.{
        diagram_class.name}Repository;\n"
    content += f"import com.{diagram_class.project_name}.model.{diagram_class.name};\n"
    functionslist = ""

    content += f"@Service\n"
    content += f"public class {diagram_class.name}Service {{\n"

    content += f"    @Autowired\n"
    content += f"    private {diagram_class.name}Repository {
        diagram_class.name.lower()}Repository;\n"

    # Add service methods
    content += f"    public List<{diagram_class.name}> getAll{
        diagram_class.name}s() {{\n"
    content += f"        return {diagram_class.name.lower()
                                 }Repository.findAll();\n"
    content += f"    }}\n"

    content += f"    public {diagram_class.name} get{
        diagram_class.name}ById({idtype} id) {{\n"
    content += f"        Optional<{diagram_class.name}> result = {
        diagram_class.name.lower()}Repository.findById(id);\n"
    content += f"        return result.orElse(null);\n"
    content += f"    }}\n"

    content += f"    public void create{diagram_class.name}({diagram_class.name} {
        diagram_class.name.lower()}) {{\n"
    content += f"        {diagram_class.name.lower()
                          }Repository.save({diagram_class.name.lower()});\n"
    content += f"    }}\n"

    content += f"    public {diagram_class.name} update{diagram_class.name}({idtype} id, {
        diagram_class.name} {diagram_class.name.lower()}) {{\n"
    content += f"try{{    \n"
    content += f"{diagram_class.name} {diagram_class.name.lower()}Found = {diagram_class.name.lower(
    )}Repository .findById({diagram_class.name.lower()}.get{diagram_class.name}Id()).orElse(null); \n"
    content += f"if({diagram_class.name.lower()}Found == null) return null; \n"
    content += f"        {diagram_class.name.lower()
                          }Repository.save({diagram_class.name.lower()});\n"
    content += f"return {diagram_class.name.lower()};\n"
    content += f"    }}\n"
    content += f"catch(Exception e){{\n"
    content += f"return null;\n"
    content += f"}} \n"
    content += f"}} \n"

    content += f"    public void delete{
        diagram_class.name}({idtype} id) {{\n"
    content += f"        {diagram_class.name.lower()
                          }Repository.deleteById(id);\n"
    content += f"    }}\n"
    for method_nodes in diagram_class.method_nodes:
        name = method_nodes["method_name"] if method_nodes["method_name"]else ""
        modifier = method_nodes["method_modifier"] if method_nodes["method_modifier"] else ""
        rtype = method_nodes["method_rtype"] if method_nodes["method_rtype"] else "Object"
        params = method_nodes["method_params"]if method_nodes["method_params"]else ""
        # this is for function creation
        functionslist += f" {modifier} {rtype} {name}({rtype} {params}) {{\n"
        functionslist += f" //Implement Your Function HERE \n"
        functionslist += f" return {params}; }}\n"
    content_end = f"}}\n"
    result = content+functionslist+content_end

    return result
