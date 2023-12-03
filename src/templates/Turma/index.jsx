import React, { useState, useEffect } from "react";
import { Footer, Header } from "@components";
import * as S from "./styles";


export function Turma() {
  const [alunoData, setAlunoData] = useState({
    nota: null,
    imagem: null,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [disciplina, setDisciplina] = useState("");

  
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
