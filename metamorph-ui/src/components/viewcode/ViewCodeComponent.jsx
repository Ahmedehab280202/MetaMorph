import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import '../../CSS/ViewCode.css';
import fileicon from '../../assists/file.png';

function ViewCodeComponent() {
    const staticHtml = `<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>`;
    const staticCss = `body {\n  background-color: lightblue;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\np {\n  font-family: verdana;\n  font-size: 20px;\n}`;
    const staticCss2 = `body {\n  background-color: lightblue;\n text-align: center;\np {\n  font-family: verdana;\n  font-size: 20px;\n}`;
    
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    
    // files array
    const files = [
        { name: 'Index.html', code: staticHtml },
        { name: 'Index.css', code: staticCss },
        { name: 'Index.css', code: staticCss2}
    ];

    return (
        <div>
            <div className="fileList">
                <h3 style={{paddingBottom:'10px'}}>Files:</h3>
                <ul>
                    {files.map((file, index) => (
                        <li key={index}>
                            <button
                                type="button"
                                onClick={() => handleFileSelect(file)}
                                className="fileButton"
                            >
                                <img src={fileicon} alt="File Icon" className="fileicon" />
                                {file.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="generatedCode">
                <CodeEditor code={selectedFile ? selectedFile.code : 'No code'} />
            </div>
        </div>
    );
}

export default ViewCodeComponent;
