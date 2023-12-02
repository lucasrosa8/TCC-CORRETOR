import React, { useState } from "react";
import { Checkbox, Footer, Header } from "@components";
import * as S from "./styles";
import { options, questions } from "./utils";

export function Gabarito() {
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

  const [formData, setFormData] = useState({
    answers: table,
   
  });

  const onSubmit = async () => {
    try {
      const response = await fetch("url_banco", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData);

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
      <Header hasNavbar />

      <S.Main>
        <S.AnswersWrapper>
          <h1>Cadastrar Gabarito</h1>

          <div className='radio'>
            <label>
              <input type="radio" id="opcao1" name="opcao" value="A1" />
              A1
            </label>
            <label>
              <input type="radio" id="opcao2" name="opcao" value="A2" />
              A2
            </label>
            <label>
              <input type="radio" id="opcao3" name="opcao" value="A3" />
              A3
            </label>
          </div>

          <h2>Selecione as alternativas corretas</h2>

          <S.Table>
            <thead>
              <tr>
                <th />

                {options.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {questions.map((question) => (
                <tr key={Math.random()}>
                  <td>Questão {question}</td>

                  {options.map((option) => (
                    <td key={option}>
                      <Checkbox
                        checked={table.some(
                          (item) =>
                            item.question === question && item.option === option
                        )}
                        onClick={() => onClickCheckbox(question, option)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </S.Table>
        </S.AnswersWrapper>

        <S.PdfButton type="button" onClick={onSubmit}>
          Cadastrar Gabarito
        </S.PdfButton>
      </S.Main>

      <Footer />
    </>
  );
}
