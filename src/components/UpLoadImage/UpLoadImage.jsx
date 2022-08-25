import React, { useState } from "react";

const UploadImage = ({ getImage, onChangeImage }) => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const loadingImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ariakisbg/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    //console.log(res)
    const file = await res.json();
    //console.log(file)
    setImage(file.secure_url);
    getImage(file.secure_url);
    console.log(file.secure_url);
    onChangeImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="dark:text-white">Upload your image</h1>
      <div>
        <input
          type="file"
          name="file"
          id="name"
          placeholder="Upload your image"
          onChange={loadingImage}
        />

        {loading ? (
          <h3>Loading images...</h3>
        ) : (
          <img src={image} style={{ width: "300px" }} />
        )}
      </div>
    </div>
  );
};

export default UploadImage;
