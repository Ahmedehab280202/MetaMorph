from fastapi import FastAPI
from read_module.class_creator import Class_Creator
from java_generator.filemerger import FileMerger


app = FastAPI()

# this is method that passes json file to be processed


def process_json_data(json_data):
    diagram_classes = Class_Creator.create_diagram_classes(json_data)
    m = FileMerger(diagram_classes)  # Pass list of classes
    merged_files_data = m.filemerger()

    return merged_files_data

# post method recieves jsonfile


@app.post("/springboot")
def hello(body: dict):
    data = body
    return process_json_data(data)


# fast api server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000)
