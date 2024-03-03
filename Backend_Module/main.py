import requests
from fastapi import FastAPI, HTTPException
from read_module.class_creator import Class_Creator
# from java_generator.makemyfiles import MakeMyFiles
from java_generator.filemerger import FileMerger


# for java files
# path_to_json = "diagram.json"

# diagram_classes = Class_Creator.create_diagram_classes(path_to_json)
# for diagram_class in diagram_classes:
#    mk = MakeMyFiles(diagram_class)
#    mk.makemyfiles(diagram_class)


app = FastAPI()

# Function to read a JSON file from the network


async def fetch_json_data(url: dict):
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise exception for non-200 status codes
    except requests.exceptions.RequestException as e:
        raise HTTPException(
            status_code=500, detail=f"Error fetching data: {e}")
    return response.json()

# Function to process the JSON data using existing classes (replace with your logic)


# ... other imports

def process_json_data(json_data):
    diagram_classes = Class_Creator.create_diagram_classes(json_data)
    m = FileMerger(diagram_classes)  # Pass list of classes
    merged_files_data = m.filemerger()

    return merged_files_data


@app.post("/hello")
def hello(body: dict):
    data = body
    return process_json_data(data)


# Run the application (optional)
if __name__ == "__main__":
    import uvicorn
    # Change host and port as needed
    uvicorn.run("main:app", host="127.0.0.1", port=8000)
