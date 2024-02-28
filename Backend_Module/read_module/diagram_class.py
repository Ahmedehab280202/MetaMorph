class Diagram_Class:
    def __init__(self, project_name, id, name, prop_nodes, method_nodes):
        self.project_name = project_name
        self.id = id
        self.name = name
        self.prop_nodes = [
            {
                "modifier": prop.get("modifier"),
                "name": prop.get("name"),
                "dtype": prop.get("dtype"),
                "default": prop.get("defaultVal"),
            }
            for prop in prop_nodes
        ]
        self.method_nodes = [
            {
                "method_modifier": method.get("method_modifier"),
                "method_name": method.get("method_name"),
                "method_rtype": method.get("method_rtype"),
                "method_params": method.get("method_params")
            }
            for method in method_nodes
        ]
