import { Checkbox, Footer, Header } from "@components";

import { useState } from "react";

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

  return (
    <>
      <Header hasNavbar />

      <S.Main>

      
        
        <S.AnswersWrapper>
          <h1>Cadastrar Gabarito</h1>
          
          <div class='radio'>
          <label>
            <input type="radio"  id="opcao1" name="opcao" value="A1"/>
            A1
            </label>
            <label>
                <input type="radio" id="opcao2" name="opcao" value="A2"/>
                A2
            </label>
            <label>
                <input type="radio" id="opcao3" name="opcao" value="A3"/>
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
                    <td>
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


        <S.PdfButton type="button">Cadastrar Gabarito</S.PdfButton>
      </S.Main>

      <Footer />
    </>
  );
}
