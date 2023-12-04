import React, { useState } from "react";
import { Footer, Header } from "@components";
import * as S from "./styles";

const ImageUpload = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Verifica se um arquivo foi selecionado e se é do tipo desejado
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      setSelectedImage(file);
      onImageSelect(file); // Passa a imagem selecionada para a função do componente pai
    } else {
      // quando o arquivo nao é o permitido, ele indica quais arquivos são aceitos!
      console.error('Por favor, selecione uma imagem PNG ou JPEG.');
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".png, .jpeg, .jpg"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div>
          <p>Imagem selecionada:</p>
          <img src={URL.createObjectURL(selectedImage)} alt="Imagem selecionada" />
        </div>
      )}
    </div>
  );
};

const HomePage = ({ onImageSelect }) => {
  // ...

  return (
    <div>
      <h2>Faça sua correção de prova aqui!.</h2>
      <ImageUpload onImageSelect={onImageSelect} />
    </div>
  );
};

export function Prova() {
  const [table, setTable] = useState([]);
  const [formData, setFormData] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // Novo estado para armazenar a imagem selecionada

  const onImageSelect = (image) => {
    setSelectedImage(image);
  };

 

  const handleSubmit = async () => {
    try {
      
      const formData = new FormData();
      formData.append('image', selectedImage);
      formData.append('table', JSON.stringify(table));
      console.log(selectedImage.type)

      const response = await fetch("url_banco", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Erro ao enviar a requisição: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Resposta da API:", result);
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
    }
  };

  return (
    <>
      <div className='head'>
        <Header hasNavbar />
      </div>
      <S.Main>
        <S.FirstForm>
          <HomePage onImageSelect={onImageSelect} />
        </S.FirstForm>

        <S.Submit type="button" onClick={handleSubmit}>
          Corrigir Prova
        </S.Submit>
      </S.Main>

      <Footer />
    </>
  );
}
