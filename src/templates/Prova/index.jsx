import React, { useState } from "react";
import { Footer, Header } from "@components";
import * as S from "./styles";
import ImageUpload from "../../components/imagem";

const HomePage = () => {
  return (
    <div>
      <h2>Faça sua correção de prova aqui!.</h2>
      <ImageUpload />
    </div>
  );
};

export function Prova() {
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
      <div className='head'>
        <Header hasNavbar />
      </div>
      <S.Main>
        <S.FirstForm>
          
          <HomePage />
        </S.FirstForm>

        <S.Submit type="button">Corrigir Prova</S.Submit>
      </S.Main>

      <Footer />
    </>
  );
}
