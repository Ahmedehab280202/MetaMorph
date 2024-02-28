from read_module.class_creator import Class_Creator
from java_generator.makemyfiles import MakeMyFiles


path_to_json = "diagram.json"

diagram_classes = Class_Creator.create_diagram_classes(path_to_json)
for diagram_class in diagram_classes:
    mk = MakeMyFiles(diagram_class)
   # print(mk.diagramclass.project_name)
    mk.makemyfiles(diagram_class)
