import React, { useState } from "react";
import { Footer, Header } from "@components";
import * as S from "./styles";

export function Cturma() {
  const [alunoData, setAlunoData] = useState({
    nota: null,
    imagem: null,
  });
  const [disciplina, setDisciplina] = useState("");
  const [turmaData, setTurmaData] = useState("");

  const handleInputChange = (event) => {
    setTurmaData(event.target.value);
  };

  const handleCadastrarTurma = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Enviar requisição para a API com os dados da turma
    fetch("sua_url_da_api/aqui", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ turmaData }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Lógica de tratamento da resposta da API, se necessário
        console.log("Resposta da API:", data);
      })
      .catch((error) => {
        console.error("Erro ao enviar requisição:", error);
      });
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

          <form>
            <input type="text" value={turmaData} onChange={handleInputChange} />

            <button type="button" onClick={handleCadastrarTurma}>
              Cadastrar Turma
            </button>
          </form>
        </S.FirstForm>
      </S.Main>

      <Footer />
    </>
  );
}
