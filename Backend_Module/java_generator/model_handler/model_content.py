def generate_model_content(diagram_class):
    # model-imports

    content = f"package com.example.{diagram_class.project_name}.demo.model;\n"
    content += f"import jakarta.persistence.*;\n"
    content += f"import lombok.*;\n"

    # content += f"import com.example.test.demo.*;\n"
    # content += f"import jakarta.persistence.Entity;\n"
    # content += f"import jakarta.persistence.GeneratedValue;\n"
    # content += f"import lombok.Data;\n"
    # content += f"import lombok.NoArgsConstructor;\n"
    # content += f"import lombok.AllArgsConstructor;\n"

    # model Annotations
    content += f"@Entity\n"
    content += f"@Data\n"
    content += f"@AllArgsConstructor\n"
    content += f"@NoArgsConstructor\n"
    content += f"public class {diagram_class.name} {{\n"
    content += f"@Id\n"
    content += f"@GeneratedValue\n"

    # this to generate model attributes
    for prop_node in diagram_class.prop_nodes:
        modifier = prop_node["modifier"] if prop_node["modifier"] else ""
        dtype = prop_node["dtype"] if prop_node["dtype"] else "Object"
        # this to capitalize string to match java syntax
        if dtype == "string":
            dtype = dtype.capitalize()
        content += f"    {modifier} {dtype} {
            prop_node['name']} ;\n"

    content_end = "}\n"
    result = content + content_end
    return result


#               Deprecated  and replaced with annotation ALLArgsConstructor
#        # this for get function
#        functionslist += f" {modifier} {dtype} get{prop_node['name']}() {{\n"
#        functionslist += f" return {prop_node['name']} }}\n"
#        # this for set function
#        functionslist += f" {modifier} void  set{
#            prop_node['name']}({dtype} {prop_node['name']}) {{\n"
#        functionslist += f"this.{prop_node['name']
#                                 } = {prop_node['name']}; }}\n"
