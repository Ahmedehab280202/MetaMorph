def generate_repository_content(project_name, Diagram_class):
    content = f"""import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.softwareproject.stadium.{project_name}.{Diagram_class.name};
@Repository
public interface {Diagram_class.name}Repository extends JpaRepository<{Diagram_class.name}, Long> {{}}
"""
    return content
