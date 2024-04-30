import React, { useState } from 'react';
import axios from 'axios';

const FigmaUploaderDemo= () => {
  const [figmaToken, setFigmaToken] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [rawUiData, setRawUiData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const match = fileUrl.match(/\/file\/([^\/?]+)/);
    const fileKey = match ? match[1] : null;

    const url = `https://api.figma.com/v1/files/${fileKey}`;
    const headers = {
      'X-Figma-Token': figmaToken,
    };

    try {
      const response = await axios.get(url, { headers });
      const rawData = response.data.document.children.find((node) => node.type === 'CANVAS').children;
      setRawUiData(rawData);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setRawUiData(null);
      setError('Failed to fetch data. Please check your Figma token and file URL.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Figma Token:
          <input type="text" value={figmaToken} onChange={(e) => setFigmaToken(e.target.value)} />
        </label>
        <br />
        <label>
          Figma File URL:
          <input type="text" value={fileUrl} onChange={(e) => setFileUrl(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {console.log(JSON.stringify(rawUiData, null, 2))}
      {rawUiData && (
        <pre>{JSON.stringify(rawUiData, null, 2)}</pre>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FigmaUploaderDemo;