def generate_services_content(diagram_class):
    content = f"import org.springframework.stereotype.Service;\n"
    content += f"import org.springframework.beans.factory.annotation.Autowired;\n"
    content += f"import java.util.List;\n"
    content += f"import java.util.Optional;\n"
    content += f"import {diagram_class.name}Repository;\n"
    content += f"import {diagram_class.name};\n"
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
        diagram_class.name}ById({diagram_class.name} id) {{\n"
    content += f"        Optional<{diagram_class.name}> result = {
        diagram_class.name.lower()}Repository.findById(id);\n"
    content += f"        return result.orElse(null);\n"
    content += f"    }}\n"

    content += f"    public void create{diagram_class.name}({diagram_class.name} {
        diagram_class.name.lower()}) {{\n"
    content += f"        {diagram_class.name.lower()
                          }Repository.save({diagram_class.name.lower()});\n"
    content += f"    }}\n"

    content += f"    public void update{diagram_class.name}({diagram_class.name} id, {
        diagram_class.name} {diagram_class.name.lower()}) {{\n"
    content += f"        {diagram_class.name.lower()
                          }Repository.save({diagram_class.name.lower()});\n"
    content += f"    }}\n"

    content += f"    public void delete{
        diagram_class.name}({diagram_class.name} id) {{\n"
    content += f"        {diagram_class.name.lower()
                          }Repository.deleteById(id);\n"
    content += f"    }}\n"
    for method_nodes in diagram_class.method_nodes:
        name = method_nodes["method_name"] if method_nodes["method_name"]else ""
        modifier = method_nodes["method_modifier"] if method_nodes["method_modifier"] else ""
        rtype = method_nodes["method_rtype"] if method_nodes["method_rtype"] else "Object"
        params = method_nodes["method_params"]if method_nodes["method_params"]else ""
        # this is for function creation
        functionslist += f" {modifier} {rtype} {name}({params}) {{\n"
        functionslist += f" return {params} }}\n"
    content_end = f"}}\n"
    result = content+functionslist+content_end

    return result
