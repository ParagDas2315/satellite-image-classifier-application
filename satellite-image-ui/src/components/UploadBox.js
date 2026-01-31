import React from "react";

const UploadBox = ({ image, setImage }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage({
        file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div className="upload-box">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {image && <img src={image.preview} alt="preview" className="preview-img" />}
    </div>
  );
};

export default UploadBox;
