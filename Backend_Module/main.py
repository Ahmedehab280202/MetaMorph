from read_module.class_creator import Class_Creator
path_to_json = "diagram.json"

diagram_classes = Class_Creator.create_diagram_classes(path_to_json)
for diagram_class in diagram_classes:
    diagram_class.display_info()
