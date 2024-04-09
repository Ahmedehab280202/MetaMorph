from ..file_generator import FileGenerator
from .controller_content import generate_controller_content


class Controller_Generator(FileGenerator):
    def __init__(self, diagram_class):
        self.diagram_class = diagram_class
        self.content = generate_controller_content(self.diagram_class)

    def generatefile(self, diagram_class):
        directory = ""
        filename = self.diagram_class.name+"Controller"+".java"
        file_path = directory+filename
        # content = generate_model_content(self.diagram_class)
        file_content = self.content
        with open(file_path, "w") as file:
            file.write(file_content)
        print(f"{self.diagram_class.name} class generated and saved to {file_path}")
