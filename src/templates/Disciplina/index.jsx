import { useState } from "react";
import { Checkbox, Footer, Header } from "@components";
import * as S from "./styles";

const handleSubmit = async (formData) => {
  try {
    const response = await fetch("url_banco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Erro ao enviar a requisição: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Resposta da API:", result);
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);
  }
};

export function Disciplina() {
  const [table, setTable] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    info: "",
    periodo: "",
  });

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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = () => {
    handleSubmit(formData);
    // Limpar o formulário ou fazer outras ações após o envio bem-sucedido, se necessário
  };

  return (
    <>
      <div className="head">
        <Header hasNavbar />
      </div>
      <S.Main>
        <S.FirstForm>
          <h2>Cadastrar Disciplina</h2>

          <p>Preencha o formulário abaixo para cadastrar uma Disciplina.</p>

          <div>
            <S.FormRow>
              <label htmlFor="title">Nome da Disciplina</label>
              <input
                type="text"
                id="title"
                onChange={handleInputChange}
                value={formData.title}
              />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="info">
                Professor{" "}
                <span>(Nome do professor que irá ministrar a disciplina)</span>
              </label>
              <input
                type="text"
                id="info"
                onChange={handleInputChange}
                value={formData.info}
              />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="periodo">Período</label>
              <input
                type="text"
                id="periodo"
                onChange={handleInputChange}
                value={formData.periodo}
              />
            </S.FormRow>
          </div>
        </S.FirstForm>

        <S.Submit type="button" onClick={handleFormSubmit}>
          Cadastrar Disciplina
        </S.Submit>
      </S.Main>

      <Footer />
    </>
  );
}
