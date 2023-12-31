import styled from "styled-components";

export const Main = styled.main`
  min-height: 77.8vh;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  background-color: #f2f2f2;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Adicionado para centralizar no eixo vertical */
  height: 100%; /* Adicionado para ocupar toda a altura da tela */

  width: 100%;
  max-width: 450px;
  margin: 50px auto; /* Alterado para centralizar horizontalmente */
  padding: 2rem;

  background-color: #fff;
  border-radius: 24px;
  box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.3);

  a {
    color: #0077b6;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 25px 0;

  button {
    height: 6vh;
    width: 65%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    background: #0b2940;
    border: 0;
    border-radius: 8px;
    font-family: "Archivo";
    font-weight: 600;
    font-size: 25px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #0b2973;
    }
  }
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  input {
    padding: 10px;
    border-radius: 5px;
    background-color: #d9d9d9;
    border: 1px solid #000;
    border: none;
    border: 1px solid #000;
  }
`;
