import { Footer, Header } from "@components";

import * as S from "./styles";

import React, { useState, useEffect } from "react";

export function CDisciplina() {
  const [alunoData, setAlunoData] = useState({
    nota: null,
    imagem: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("sua/api/aluno");
        if (!response.ok) {
          throw new Error("Erro ao obter dados do aluno");
        }

        const data = await response.json();

        // Realizar a comparação de imagens 
        const nota = realizarComparacaoDeImagens(data.imagem);

        // Atualizar estado com a imagem e a nota
        setAlunoData({ nota, imagem: data.imagem });

        // Salvar os dados no armazenamento local ou em algum banco de dados,
        salvarDadosNoArmazenamentoLocal({ nota, imagem: data.imagem });
      } catch (error) {
        console.error("Erro na solicitação da API:", error);
      }
    };

    fetchData();
  }, []);

  const realizarComparacaoDeImagens = (imagem) => {
    // Lógica de comparação de imagens aqui
    // Retorne a nota calculada com base na comparação de imagens
    return 90; // Exemplo: nota 90 (substitua pela sua lógica real)
  };

  const salvarDadosNoArmazenamentoLocal = (dados) => {
    // Lógica para salvar os dados no armazenamento local ou em um banco de dados
    localStorage.setItem("dadosAluno", JSON.stringify(dados));
  };

  return (
    <>
    
      <Header hasNavbar />

      <S.Main>
      <S.FirstForm>
        {alunoData.imagem && (
          <div>
            <img src={alunoData.imagem} alt="Imagem do Aluno" />
            {alunoData.nota !== null && <p>Nota: {alunoData.nota}</p>}
          </div>
        )}
        </S.FirstForm>
      </S.Main>
      

      <Footer />
    </>
  );
}
