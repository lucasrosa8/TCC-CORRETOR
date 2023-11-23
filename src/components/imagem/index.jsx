// ImageUpload.js
import { useState } from 'react';
import styles from './styles'; // Importe os estilos do arquivo separado

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
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={styles.input}
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          style={styles.imagePreview}
        />
      )}
    </div>
  );
};

export default ImageUpload;
