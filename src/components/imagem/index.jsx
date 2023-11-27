// ImageUpload.js
import { useState } from 'react';
import { ImageContainer, InputField, Button, ImagePreview } from '../imagem/styles';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <InputField
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <ImagePreview
          src={selectedImage}
          alt="Selected"
        />
      )}
    </div>
  );
};

export default ImageUpload;
