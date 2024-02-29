def generate_repository_content(diagram_class):
    idtype = diagram_class.prop_nodes[0]["dtype"]
    if idtype == "int":
        idtype = "Integer"
    elif idtype == "string":
        idtype = "String"

    content = f"""
package com.example.{diagram_class.project_name}.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.{diagram_class.project_name}.demo.model.*;
import java.util.Optional;
@Repository
"""

    content += f"public interface {diagram_class.name}Repository extends JpaRepository<{
        diagram_class.name}, {idtype}> {{\n"
    content += f" // what is below is experiemental remove if not needed   \n"
    content += f"Optional<{
        diagram_class.name}>findById({diagram_class.name} id);\n"
    content += f"void deleteById( {diagram_class.name} id );\n"
    content += f"}}\n"

    return content
