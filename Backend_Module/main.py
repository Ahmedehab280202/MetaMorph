from read_module.class_creator import Class_Creator
from java_generator.makemyfiles import MakeMyFiles


from fastapi import FastAPI, HTTPException

app = FastAPI()


# @app.get("/java")
# def read_root():
#    return {"message": "Hello, World!"}


@app.post("/java")
def request_body(request_body: dict):
    return {"request_body": request_body}


path_to_json = "diagram.json"

diagram_classes = Class_Creator.create_diagram_classes(path_to_json)
for diagram_class in diagram_classes:
    mk = MakeMyFiles(diagram_class)
    mk.makemyfiles(diagram_class)
