from java_generator.model_handler.model_content import generate_model_content
from java_generator.model_handler.save_to_file import save_to_file


class ModelGenerator:
    def __init__(self, diagram_class):
        self.diagram_class = diagram_class

    def generatefile(self):
        directory = ""
        filename = self.diagram_class.name+".java"
        file_path = directory+filename
        content = generate_model_content(self.diagram_class)
        save_to_file(content, file_path)
