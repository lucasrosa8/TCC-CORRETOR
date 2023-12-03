import React, { useState } from "react";
import { Footer, Header } from "@components";
import * as S from "./styles";

export function Cturma() {
  const [turmaData, setTurmaData] = useState("");

  const handleInputChange = (event) => {
    setTurmaData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
  
    try {
      const formData = { nomeDaTurma: turmaData };
  
      const response = await fetch("sua_url_aqui", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      console.log("Enviando dados da turma para a API:", formData);
  
      if (!response.ok) {
        throw new Error(`Erro ao enviar a requisição: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log("Resposta da API:", result);
  
      // Limpar o campo após o cadastro
      setTurmaData("");
    } catch (error) {
      console.error("Erro ao processar a requisição:", error);
    }
  };
  return (
    <>
      <Header hasNavbar />

      <S.Main>
        <S.FirstForm>
          <div>
            <label>
              Nome da Turma:
              <input type="text" value={turmaData} onChange={handleInputChange} />
            </label>

            <button className="button" onClick={handleSubmit}>
              Cadastrar Turma
            </button>
          </div>
        </S.FirstForm>
      </S.Main>

      <Footer />
    </>
  );
}
