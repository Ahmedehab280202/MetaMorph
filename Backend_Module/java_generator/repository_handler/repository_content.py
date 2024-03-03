def generate_repository_content(diagram_class):
    idtype = diagram_class.prop_nodes[0]["dtype"]
    if idtype == "int":
        idtype = "Integer"
    elif idtype == "string":
        idtype = "String"

    content = f" package com.{diagram_class.project_name}.repository;   \n"
    content += f" import org.springframework.data.jpa.repository.JpaRepository;   \n"
    content += f" import org.springframework.stereotype.Repository;   \n"
    content += f" import com{diagram_class.project_name}.model.*;   \n"
    content += f" import java.util.Optional;   \n"
    content += f" @Repository   \n"

    content += f"public interface {diagram_class.name}Repository extends JpaRepository<{
        diagram_class.name}, {idtype}> {{\n"
    content += f"}}\n"

    return content

 # deprecated experiemental#
    # content += f" // what is below is experiemental remove if not needed   \n"
    # content += f"Optional<{
    #    diagram_class.name}>findById({diagram_class.name} id);\n"
    # content += f"void deleteById( {diagram_class.name} id );\n"
