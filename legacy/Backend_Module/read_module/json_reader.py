import json
import os


def read_json(json_file_path):
    if os.path.exists(json_file_path):
        with open(json_file_path, "r") as file:
            parsed_data = json.load(file)
        return parsed_data  # Add this line to return the parsed_data
    else:
        print(f"Error: File not found - {json_file_path}")
        return None  # Return None in case of an error
