import { Checkbox, Footer, Header } from "@components";

import { useState } from "react";

import * as S from "./styles";


export function Form() {
  const [table, setTable] = useState([]);

  const onClickCheckbox = (question, option) => {
    setTable((prev) => {
      const tableData = [...prev];

      const foundIndex = tableData.findIndex(
        (item) => item.question === question
      );

      if (foundIndex !== -1) {
        tableData[foundIndex].option = option;

        return tableData;
      }

      tableData.push({
        question,
        option,
      });

      return tableData;
    });
  };

  return (
    <>
    <div class='head'>
      <Header hasNavbar />
    </div>
      <S.Main>
        <S.FirstForm>
          <h2>Cadastrar Aluno</h2>
          
          <p>Preencha formulário abaixo para cadastrar um aluno para realizar a prova.</p>

          <div>
            <S.FormRow>
              <label htmlFor="title">Nome do Aluno</label>
              <input type="text" id="title" />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="info">
                RA <span>(Número de registro do Aluno)</span>
              </label>
              <input type="text" id="info" />
            </S.FormRow>
          </div>

          <S.Legend hasMarginTop>Informações Acadêmicas</S.Legend>

          <div>
            <S.FormRow>
              <label htmlFor="curso_name">Curso</label>
              <input type="text" id="curso_name" />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="semestre_info">Semestre</label>
              <input type="text" id="semestre_info" />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="periodo">Período</label>
              <input type="text" id="periodo" />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="Disciplina">Disciplina</label>
              <input type="text" id="disciplina" />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="periodo">Avaliação</label>
              <input type="text" id="periodo" />
            </S.FormRow>
          </div>
          

         

         
        </S.FirstForm>

        <S.Submit type="button">Cadastrar aluno</S.Submit>

        
      </S.Main>

      <Footer />
    </>
  );
}
