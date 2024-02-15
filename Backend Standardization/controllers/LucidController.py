from fastapi import FastAPI, File, UploadFile
from typing import List
from models.LucidCsvFile import LucidCsvFile
import pandas as pd
import json

app = FastAPI()

# API routes
@app.get('/')
def index():
    return {'message': 'Welcome to my API!'}

@app.get('/lucid')
def get_data():
    data = {'message': 'This is your data from the API!'}
    return data

@app.post("/upload_csv")
async def upload_csv(csv_file: UploadFile = File(...)):
    # Check if the uploaded file is a CSV file
    if not csv_file.filename.endswith('.csv'):
        return {"error": "Invalid file format. Please upload a CSV file."}
    
    dataframe = pd.read_csv(csv_file.file)
    res = LucidCsvFile(dataframe)
    return res