import styled from "styled-components";


export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  section {
    margin-bottom: 40px;

    h1 {
      font-size: 2.5em;
      margin-bottom: 15px;
      color: #3498db; /* Cor azul para título principal */
    }

    h2 {
      font-size: 2em;
      margin-bottom: 10px;
      color: #2ecc71; /* Cor verde para títulos de seção */
    }

    p {
      font-size: 1.2em;
      line-height: 1.6;
      color: #34495e; /* Cor escura para texto principal */
    }

    ul {
      list-style-type: disc;
      margin-left: 20px;
    }

    li {
      font-size: 1.2em;
      line-height: 1.6;
      color: #34495e;
    }
  }

  button {
    padding: 15px 30px;
    font-size: 1.2em;
    background-color: #e74c3c; /* Cor vermelha para botão CTA */
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c0392b;
      /* Cor mais escura ao passar o mouse */
    }
  }

  .ad-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
    .ad {
      width: 300px;
      margin: 20px;
      padding: 15px;
      background-color: #ecf0f1;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease-in-out; /* Adição da transição */

      &:hover {
        transform: scale(1.05);
        cursor: pointer; /* Aumenta um pouco o tamanho ao passar o mouse */
      }
  }

      h3 {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #e67e22; /* Cor laranja para títulos de anúncio */
      }

      p {
        font-size: 1em;
        color: #7f8c8d; /* Cor cinza para texto de anúncio */
      }

      img {
        max-width: 100%;
        height: auto;
        margin-top: 15px;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    

  section.testimonials {
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 2.2em;
      margin-bottom: 20px;
      color: #9b59b6; /* Cor roxa para título de depoimentos */
    }

    .testimonial {
      max-width: 700px;
      margin: 0 auto;
      padding: 25px;
      background-color: #ecf0f1;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

      p {
        font-size: 1.2em;
        line-height: 1.6;
        margin-bottom: 15px;
        color: #34495e; /* Cor escura para texto de depoimento */
      }

      span {
        font-weight: bold;
        color: #e74c3c; /* Cor vermelha para parte destacada do depoimento */
      }
    }
  }
`;
