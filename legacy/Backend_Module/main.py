

from fastapi import FastAPI
from read_module.class_creator import Class_Creator
from java_generator.filemerger import FileMerger
from java_generator.makemyfiles import MakeMyFiles

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# this is method that passes json file to be processed


def process_json_data(json_data):
    diagram_classes = Class_Creator.create_diagram_classes(json_data)
    for diagram_class in diagram_classes:
        mk = MakeMyFiles(diagram_class)
        mk.makemyfiles(diagram_class)
    return "files created "


# post method recieves jsonfile


@app.post("/hello")
def hello(body: dict):
    data = body
    return process_json_data(data)


# fast api server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8001)
