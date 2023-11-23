import styled, { css } from "styled-components";


export const Main = styled.main`
  min-height: 77.8vh;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  font-family: "Archivo", sans-serif;
`;

export const FirstForm = styled.form`
  margin: 40px auto;
  padding: 60px;

  width: 90%;

  background: #fafafc;
  border-radius: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  

  h2 {
    font-weight: bold;
    padding-bottom:35px;
    font-size: 24px;
    margin: 0 auto;
    text-align: center;
  }

`;



export const Submit = styled.button`
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
`;



