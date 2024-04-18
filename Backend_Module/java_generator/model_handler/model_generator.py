from ..file_generator import FileGenerator
from .model_content import generate_model_content


class Model_Generator(FileGenerator):
    def __init__(self, diagram_class):
        self.diagram_class = diagram_class
        self.content = generate_model_content(self.diagram_class)

    def generatefile(self, diagramclass):
        directory = ""
        filename = self.diagram_class.name+".java"
        file_path = directory+filename
        # content = generate_model_content(self.diagram_class)
        file_content = self.content
        with open(file_path, "w") as file:
            file.write(file_content)
        print(f"{self.diagram_class.name} class generated and saved to {file_path}")
