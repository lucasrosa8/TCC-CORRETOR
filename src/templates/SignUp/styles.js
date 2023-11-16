import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;

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

  width: 100%;
  max-width: 450px;
  margin: 50px auto;
  padding: 2rem;

  background-color: #fff;
  border-radius: 24px;
  box-shadow: -10px 10px 20px rgba(0,0,0,0.3);

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
    background-color: #0B2940;
    border: 0.0625rem solid #ec8a34;

    color: #fff;
    border: none;

    margin: auto;
    padding: 0.5rem 0.5rem;

    height: 2rem;
    width: 8rem;

    border-radius: 11px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background-color: #0b2973;
      color: #fff;
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
    background-color: #D9D9D9;
    border: 1px solid #000;

    border: none;
    border:1px solid #000;
  }
`;
