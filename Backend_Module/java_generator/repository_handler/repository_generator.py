from ..file_generator import FileGenerator
from .repository_content import generate_repository_content


class Repository_Generator(FileGenerator):
    def __init__(self, diagram_class):
        self.diagram_class = diagram_class
        self.content = generate_repository_content(
            self.diagram_class)

    def generatefile(self, diagram_class):
        directory = ""
        filename = self.diagram_class.name+"Repository"+".java"
        file_path = directory+filename
        file_content = self.content
        with open(file_path, "w") as file:
            file.write(file_content)
        print(f"{self.diagram_class.name} class generated and saved to {file_path}")
