import React, { useState } from 'react';
import csvImage from '../../assists/csvimage.png';
import '../../CSS/csv.css';


function AddCsv() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div className="addcsvfile">
            <div className="group20" onDrop={handleDrop} onDragOver={handleDragOver}>
            <button className='submitbutton1'>
              <span className='text06'>
                <span>Submit</span>
              </span>
            </button>
                <img src={csvImage} alt="csvimage" className="csvimage" />
                <span className="text4">
                    <span>Quick Import</span>
                </span>
                <span className="text6">
                    <span>Upload your Class Diagram as CSV file for a quick start.</span>
                </span>
                <label htmlFor="file" className="inputfield1">
                    {selectedFile ? selectedFile.name : "Drop file here or Click to Browse"}
                    <input type="file" id="file" accept=".csv" onChange={handleFileChange} className='file-input'/>
                </label>
            </div>
        </div>
    );
}

export default AddCsv;
