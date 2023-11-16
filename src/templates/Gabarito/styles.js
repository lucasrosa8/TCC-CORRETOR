import styled, { css } from "styled-components";


export const Main = styled.main`
  min-height: 100vh;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;

  font-family: "Archivo", sans-serif;

  
`;


export const Submit = styled.button`
  height: 5vh;
  width: 65%;
  margin: 0 auto;

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

export const AnswersWrapper = styled.section`
  font-family: "Roboto", sans-serif;
  background-color: #edecf1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 65%;

  margin: 50px auto ;

  padding: 50px 0;
  border-radius: 24px;

  label {
    padding: 0px 30px;
    display: inline-block; 
    margin: 15px auto;
    font-size:18px ;
    font-weight: bold;
  }

  h2 {
    margin-bottom: 51px;
    text-align: center;
  }

  
`;

export const Table = styled.table`
  border-collapse: collapse;

  th {
    font-size: 16px;
    font-weight: normal;
  }

  th,
  td {
    text-align: center;

    padding: 10px 10px;

    > div {
      margin: 0 auto;
    }
  }

  tr td:first-child {
    font-size: 25px;
    font-weight: 700;
  }
`;

export const PdfButton = styled.button`
  border-radius: 12px;
  border: 0;

  width: 180px;
  height: 60px;

  background: #033175;

  margin: 10px auto;

  color: #fff;
  font-family: "Archivo";
  font-weight: 600;
  font-size: 19px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0b2940;
  }
`;
