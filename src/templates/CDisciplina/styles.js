import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;


export const FirstForm = styled.form`
  margin: 50px auto;
  padding: 65px;

  width:90%;
  

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