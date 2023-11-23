import styled, { css } from "styled-components";


export const Main = styled.main`
  min-height: 100vh;
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  font-family: "Archivo", sans-serif;
`;

export const FirstForm = styled.form`
  margin: 50px auto;
  padding: 65px;

  width: 65%;

  background: #fafafc;
  border-radius: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h2 {
    font-weight: bold;

    font-size: 36px;
    margin-bottom: 24px;
  }

  p {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;

    margin-bottom: 24px;
  }
`;

export const Legend = styled.legend`
  ${({ hasMarginTop }) => css`
    font-weight: 600;
    font-size: 24px;

    border-bottom: 1px solid #e6e6f0;
    padding-bottom: 16px;

    margin-top: ${hasMarginTop ? 48 : 0}px;
  `}
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: #4e4958;

    span {
      margin-left: 12px;
      font-size: 12px;
      line-height: 20px;
      color: #c2ccbc;
    }
  }

  input {
    background: #D9D9D9;

    border: 1px solid #000;
    border-radius: 8px;
    height: 56px;
    padding: 0 24px;
    font-size: 16px;
    line-height: 26px;
    color: #6b6a6a;
  }
`;

export const DateFormRow = styled(FormRow)`
  display: flex;
  flex-direction: row !important;

  margin-top: 8px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    flex: 0.2;

    &:first-child {
      flex: 1;
    }
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

export const AnswersWrapper = styled.section`
  font-family: "Roboto", sans-serif;
  background-color: #edecf1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 65%;

  margin: 150px auto 10px auto;

  padding: 50px 0;
  border-radius: 16px;

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

  width: 140px;
  height: 60px;

  background: #033175;

  margin: 10px auto;

  color: #fff;
  font-family: "Archivo";
  font-weight: 600;
  font-size: 20px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0b2940;
  }
`;
