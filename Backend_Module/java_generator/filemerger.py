from .controller_handler.controller_content import generate_controller_content
from .model_handler.model_content import generate_model_content
from .services_handler.services_content import generate_services_content
from .repository_handler.repository_content import generate_repository_content


class FileMerger:

    def __init__(self, diagram_classes):
        self.list_of_classes = diagram_classes

    def filemerger(self):
        jsonformat_list = []

        # Iterate through each object in the list
        for diagram_class in self.list_of_classes:
            model = generate_model_content(diagram_class)
            service = generate_services_content(diagram_class)
            controller = generate_controller_content(diagram_class)
            repository = generate_repository_content(diagram_class)

            # Combine content into a dictionary
            result = {
                "model": model,
                "service": service,
                "controller": controller,
                "repository": repository
            }

            jsonformat_list.append(result)

        return jsonformat_list


# class FileMerger:
#
#    def __init__(self, diagramclass):
#        self.list_of_classes = diagramclass
#
#    def filemerger(self, list_of_classes):
#        # Controller_Generator(self.diagramclass).generatefrle(self.diagramclass)
#        classlist = self.list_of_classes
#        jsonformat_list = []
#        for each_class in classlist:
#            model = generate_model_content(each_class)
#            service = generate_services_content(each_class)
#            controller = generate_controller_content(each_class)
#            repository = generate_repository_content(each_class)
#            begin = f"{{ /n"
#            content = f"model: {model}\n"
#            content += f"service: {service}\n"
#            content += f"controller: {controller}\n"
#            content += f"repository: {repository}\n"
#            endcontent = f"}}/n"
#            result = begin+content+endcontent
#            jsonformat_list.append(result)
#        return print(jsonformat_list)


# for diagram_class in diagram_classes:
#       mk = MakeMyFiles(diagram_class)
#      mk.makemyfiles(diagram_class)
# result = ""
# content = []

    # list_of_classes
    # {
    # begin: "{",
    # model: generate_model_content(each_class),
    # service:  generate_services_content(each_class),
    # controller: generate_controller_content(each_class),
    # repository: generate_repository_content(each_class),
    # end: "}"
    # }
    # for each_class in list_of_classes
    #    ]
    # prop_nodes = [
    # {
    #    "modifier": prop.get("modifier"),
    #   "name": prop.get("name"),
    #   "dtype": prop.get("dtype"),
    #   "default": prop.get("defaultVal"),
    # }
    # for prop in prop_nodes
# ]
