import { Checkbox, Footer, Header } from "@components";
import { useState } from "react";
import * as S from "./styles";

export function Form() {
  const [table, setTable] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    info: "",
    curso_name: "",
    semestre_info: "",
    periodo: "",
    disciplina: "",
    avaliacao: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async () => {
    try {
      // Realize ações com os dados do formulário (por exemplo, fazer uma solicitação API)
      

      // Substitua "sua_url_aqui" pela URL real da sua API
      const response = await fetch("url_banco", {
        method: "POST", // ou "GET", "PUT", etc., dependendo do tipo de requisição
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
      <div className="head">
        <Header hasNavbar />
      </div>
      <S.Main>
        <S.FirstForm>
          <h2>Cadastrar Aluno</h2>
          <p>
            Preencha formulário abaixo para cadastrar um aluno para realizar a
            prova.
          </p>

          <div>
            <S.FormRow>
              <label htmlFor="title">Nome do Aluno</label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="info">
                RA <span>(Número de registro do Aluno)</span>
              </label>
              <input
                type="text"
                id="info"
                value={formData.info}
                onChange={handleChange}
              />
            </S.FormRow>
          </div>

          <div>
  <legend>Informações Acadêmicas</legend>
</div>


          <div>
            <S.FormRow>
              <label htmlFor="curso_name">Curso</label>
              <input
                type="text"
                id="curso_name"
                value={formData.curso_name}
                onChange={handleChange}
              />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="semestre_info">Semestre</label>
              <input
                type="text"
                id="semestre_info"
                value={formData.semestre_info}
                onChange={handleChange}
              />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="periodo">Período</label>
              <input
                type="text"
                id="periodo"
                value={formData.periodo}
                onChange={handleChange}
              />
            </S.FormRow>

            <S.FormRow>
              <label htmlFor="Turma">Turma</label>
              <input
                type="text"
                id="Turma"
                value={formData.disciplina}
                onChange={handleChange}
              />
            </S.FormRow>

            
          </div>
        </S.FirstForm>

        <S.Submit type="button" onClick={handleSubmit}>
          Cadastrar aluno
        </S.Submit>
      </S.Main>

      <Footer />
    </>
  );
}