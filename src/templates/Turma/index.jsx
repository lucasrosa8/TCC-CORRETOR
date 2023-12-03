import React, { useState, useEffect } from "react";
import { Footer, Header } from "@components";
import * as S from "./styles";

export function Turma() {
  const [turmas, setTurmas] = useState([]); // Estado para armazenar as turmas

  useEffect(() => {
    // Função para buscar turmas na API
    const fetchTurmas = async () => {
      try {
        // Fazer a requisição para a API (substitua a URL pela sua API real)
        const response = await fetch("sua_url_da_api/turmas");
        const data = await response.json();
        
        // Atualizar o estado com os dados recebidos da API
        setTurmas(data);
      } catch (error) {
        console.error("Erro ao buscar turmas:", error);
      }
    };

    // Chamar a função de busca ao montar o componente
    fetchTurmas();
  }, []); // O array vazio como segundo argumento garante que o useEffect será executado apenas uma vez ao montar o componente

  return (
    <>
      <Header hasNavbar />

      <S.Main>
        <S.FirstForm>
          {/* Exibir as turmas na tela */}
          {turmas.map((turma) => (
            <div key={turma.id}>
              <h2>{turma.nome}</h2>
              {/* Adicione aqui outros detalhes da turma que você deseja exibir */}
            </div>
          ))}
        </S.FirstForm>
      </S.Main>

      <Footer />
    </>
  );
}
