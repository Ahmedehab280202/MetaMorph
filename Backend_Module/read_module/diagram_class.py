class Diagram_Class:
    def __init__(self, id, name, prop_nodes):
        self.id = id
        self.name = name
        self.prop_nodes = [
            {
                "modifier": prop_node.get("modifier"),
                "name": prop_node.get("name"),
                "dtype": prop_node.get("dtype"),
                "default": prop_node.get("defaultVal"),
            }
            for prop_node in prop_nodes
        ]

    def display_info(self):
        print(self.id)
        print(self.name)
        print(self.prop_nodes)
