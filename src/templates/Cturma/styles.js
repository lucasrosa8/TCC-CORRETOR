import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const FirstForm = styled.form`
  margin: 50px auto;
  padding: 65px;
  width: 90%;
  background: #fafafc;
  border-radius: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center; /* Adicione esta linha para centralizar os itens */

  button {
    display: block;
    height: 6vh;
    width: 40%;
    margin: 20px auto;
    background: #0B2940;
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

  input {
    background: #D9D9D9;
    width: 100%;
    border: 1px solid #000;
    border-radius: 8px;
    height: 40px;
    padding: 0 24px;
    font-size: 16px;
    line-height: 26px;
    color: #6b6a6a;
    color: #000;
  }
`;