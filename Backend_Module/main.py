from read_module.class_creator import Class_Creator
from java_generator.model_handler.model_generator import ModelGenerator


path_to_json = "diagram.json"

diagram_classes = Class_Creator.create_diagram_classes(path_to_json)
for diagram_class in diagram_classes:
    diagram_class.display_info()

# Example usage
makemodel = ModelGenerator(diagram_class)
makemodel.generatefile()
