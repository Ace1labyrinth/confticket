// import React from "react";

// import { useDropzone } from "react-dropzone";

// const FileUpload = ({ onFileUpload }) => {
//   const [preview, setPreview] = useState(null);

//   const onDrop = (acceptedFiles) => {
//     const file = acceptedFiles[0];

//     if (file) {
//       const previewUrl = URL.createObjectURL(file);
//       setPreview(previewUrl);
//       onFileUpload(file);
//     }
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: "image/jpeg, image/png",
//     maxSize: 500000,
//   });

//   return (
//     <div className="file-upload-container">
//       <div className="file-upload" {...getRootProps()}>
//         <input {...getInputProps()} />
//         {!preview ? (
//           <p>Drag and drop or click to uplaod your avatar</p>
//         ) : (
//           <img src={preview} alt="Avatar Preview" className="preview-image" />
//         )}
//       </div>
//       <small>Uplaod JPG or PNG, max size: 500KB</small>
//     </div>
//   );
// };

import React, { useState } from "react";

const FileUpload = ({ onFileUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file

    if (file) {
      // Generate a preview URL for the uploaded image
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Pass the file back to the parent component
      onFileUpload(file);
    }
  };

  return (
    <div className="file-upload">
      <label htmlFor="fileInput" className="upload-label">
        {preview ? (
          <img src={preview} alt="Avatar Preview" className="preview-image" />
        ) : (
          <p>Click to upload your avatar</p>
        )}
      </label>
      <input
        id="fileInput"
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the default file input
      />
      <small>Upload JPG or PNG, max size: 500KB</small>
    </div>
  );
};

export default FileUpload;
