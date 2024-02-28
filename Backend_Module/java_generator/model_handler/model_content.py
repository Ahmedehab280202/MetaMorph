def generate_model_content(diagram_class):
    content = f"@Entity\n"

    # cotnent+=f"@Data"
# cotnent+=@ALLArgsConstructor
    # @NoArgsConstructor
    content += f"class {diagram_class.name} {{\n"
    content += f"@ID\n"
    content += f"@GeneratedValue\n"
    functionslist = ""
    for prop_node in diagram_class.prop_nodes:
        modifier = prop_node["modifier"] if prop_node["modifier"] else ""
        dtype = prop_node["dtype"] if prop_node["dtype"] else "Object"
        default_val = prop_node["default"] if prop_node["default"] else ""
        content += f"    {modifier} {dtype} {prop_node['name']} = {default_val};\n"

        # this for get function
        functionslist += f" {modifier} {dtype} get{prop_node['name']}() {{\n"
        functionslist += f" return {prop_node['name']} }}\n"
        # this for set function
        functionslist += f" {modifier} void  set{prop_node['name']}({dtype} {prop_node['name']}) {{\n"
        functionslist += f"this.{prop_node['name']} = {prop_node['name']}; }}\n"

    content_end = "}\n"
    result = content+functionslist+content_end
    return result
