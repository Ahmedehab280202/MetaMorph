import React from "react";
import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

import "../../CSS/workspace_styling/fileuploader.css"
function FileUploader() {
  const [file, setFile] = useState(null);
  const [filename, setFileName] = useState("No selected file");

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    // Assuming single file upload
    if (droppedFiles.length > 0) {
      const file = droppedFiles[0];
      setFileName(file.name);
      setFile(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div onClick={() => document.querySelector(".input-field").click()} className="input-upload-container" onDragOver={handleDragOver} onDrop={handleDrop}>
        <input
          type="file"
          accept="image/*"
          name=""
          id=""
          className="input-field"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setFile(URL.createObjectURL(files[0]));
            }
          }}
        />

        {file ? (
          <img src="" width={150} height={150} alt={filename} />
        ) : (
          <>
            <MdCloudUpload color="#7f1077" size={60} />
            <p>Browse Files to upload</p>
          </>
        )}
      </div>
      <section className="uploaded-row">
        <AiFillFileImage color="#fff"/>
        <span>
            {filename}
            <MdDelete onClick={()=>{
                setFileName("No selected File");
                setFile(null);
            }}/>
        </span>
      </section>
    </>
  );
}

export default FileUploader;
