import { Checkbox, Footer, Header } from "@components";

import { useState } from "react";

import * as S from "./styles";


export function Disciplina() {
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
          <h2>Cadastrar Disciplina</h2>
          
          <p>Preencha formulário abaixo para cadastrar uma Disciplina.</p>

          <div>
            <S.FormRow>
              <label htmlFor="title">Nome da Disciplina</label>
              <input type="text" id="title" />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="info">
                Professor <span>(Nome do professor que irá ministrar a disciplina)</span>
              </label>
              <input type="text" id="info" />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="periodo">Período</label>
              <input type="text" id="periodo" />
            </S.FormRow>
          </div>
         

         
        </S.FirstForm>

        <S.Submit type="button">Cadastrar Disciplina</S.Submit>

        
      </S.Main>

      <Footer />
    </>
  );
}