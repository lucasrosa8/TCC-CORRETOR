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

  const handleCadastrarTurma = () => {
    // Simulando uma requisição para a API (substitua pelo seu código real)
    console.log("Enviando dados da turma para a API:", turmaData);

    // Limpar o campo após o cadastro
    setTurmaData("");
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

          <div>
            <label>
              Nome da Turma:
              <input type="text" value={turmaData} onChange={handleInputChange} />
            </label>

            <button className="button"  onClick={handleCadastrarTurma}>Cadastrar</button>
          </div>
        </S.FirstForm>
      </S.Main>

      <Footer />
    </>
  );
}