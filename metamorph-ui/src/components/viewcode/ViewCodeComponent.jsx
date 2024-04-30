import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import { Nav, NavDropdown, Button, Image, Container, Row, Col } from 'react-bootstrap';
import Download from '../../assists/download.png';
import GitHub from '../../assists/github.png';

function ViewCodeComponent() {
    
    const staticHtml ='<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>This is a Heading</h1>\n<p>This is a paragraph.</p>\n\n</body>\n</html>'
    const staticCss = 'body {\n  background-color: lightblue;\n}\nh1 {\n  color: white;\n  text-align: center;\n}\np {\n  font-family: verdana;\n  font-size: 20px;\n}'
    
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    };

    const handleDownloadCode = () => {
        // Logic for downloading code
    };

    const handleExportToGitHub = () => {
        // Logic for exporting code to GitHub
    };

    // files array
    const files = [
        { name: 'Index.html', code: staticHtml },
        { name: 'Index.css', code: staticCss },
    ];

    return (
        <div>
            <NavDropdown title="Publish Code" id="" style={{marginLeft: '950px' , marginTop: '150px'}}>
                 <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Button variant="" onClick={handleDownloadCode} 
                        style={{ 
                            marginBottom: '10px',
                            borderColor: 'purple',
                            color: 'purple',
                            borderRadius: '10px',
                            backgroundColor: 'white'
                        }}>
                            <Image src={Download} alt="Download" style={{ width: '15px', height: '15px', marginRight: '8px' }} /> Download Code
                        </Button>
                        <Button variant="outline-info" onClick={handleExportToGitHub} 
                        style={{  
                                marginBottom: '10px',
                                borderColor: 'purple',
                                color: 'purple',
                                borderRadius: '10px',
                                backgroundColor: 'white'
                            }}>
                            <Image src={GitHub} alt="GitHub" style={{ width: '15px', height: '15px', marginRight: '8px' }} /> Export to GitHub
                        </Button>
                    </div>
            </NavDropdown>
                <div className="row">
                    <div className="col-2" style={{padding: '10px 30px'}}>
                        <h3 className="mb-4">Files:</h3>
                        <div className="list-group">
                            {files.map((file, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`list-group-item list-group-item-action ${selectedFile === file ? 'active' : ''}`}
                                    onClick={() => handleFileSelect(file)}
                                    style={{ fontSize: '20px', padding: '10px 10px', height:'50px', width:'200px'}}> {/* Adjusted button size */}
                                    {file.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="col">
                         <h2 className="mb-4" style={{ fontSize: '30px' }}>Generated Code</h2>
                        <CodeEditor code={selectedFile ? selectedFile.code : 'No code'} style={{ fontSize: '24px' }} />
                    </div>
                 </div>   
        </div>
    );
}

export default ViewCodeComponent;