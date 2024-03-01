# here is to take each class in diagram and create a class for it
from read_module.diagram_class import Diagram_Class as dc
# from read_module.json_reader import read_json


class Class_Creator:
    def __init__(self, json_data):
        self.data = json_data

    def create_diagram_classes(json_data):
        data = json_data
        if "class_nodes" in data:
            project_name = data.get("diagram_name")

            class_nodes = data["class_nodes"]
            diagram_classes = []

            for class_node in class_nodes:
                class_id = class_node.get("id")
                class_name = class_node.get("name")
                prop_nodes = class_node.get("prop_nodes", [])
                method_nodes = class_node.get("method_nodes", [])
                diagram_class = dc(project_name, class_id, class_name,
                                   prop_nodes, method_nodes)
                diagram_classes.append(diagram_class)
            return diagram_classes

        else:
            print("Error: No 'class_nodes' found in the JSON data.")
            return []
