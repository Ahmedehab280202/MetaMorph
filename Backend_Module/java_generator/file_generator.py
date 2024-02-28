class FileGenerator:
    def __init__(self, diagram_class):
        self.diagram_class = diagram_class
        self.content = ""

    def generatefile(self):
        directory = ""
        filename = self.diagram_class.name+".java"
        file_path = directory+filename
        # content = generate_model_content(self.diagram_class)
        file_content = self.mycontent
        with open(file_path, "w") as file:
            file.write(file_content)
        print(f"{self.diagram_class.name} class generated and saved to {file_path}")
