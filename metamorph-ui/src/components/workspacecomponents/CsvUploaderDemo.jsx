import React, { useState } from 'react';
import csvtojson from 'csvtojson';

const CsvUploaderDemo = () => {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async (event) => {
        const csvData = event.target.result;
        const jsonArray = await csvtojson().fromString(csvData);
        setJsonData(jsonArray);
      };
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {jsonData && (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      )}
    </div>
  );
};

export default CsvUploaderDemo;