import styled from "styled-components";

export const Header = styled.header`
  background-color: #0b2940;
 


 
  h1 {
    color: #EC8A34;
    font-family: "Staatliches", sans-serif;
    font-weight: 400;
    font-size: 42px;
    text-align: center;
    padding-top:25px;
  }

 
`;

export const Navbar = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      padding: 10px 20px;
      cursor: pointer;
      transition: 0.4s;
      

      a {
        color: #fff;
        font-size: 16px;
        font-family: "Poppins";
        text-decoration: none;
        
      }

      &:hover {
        background-color: #c16c21;
      }

      .dropdown-toggle {
        text-decoration: none;
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 16px;
        font-family: "Poppins";
      }

      .dropdown-menu {
        background-color: #FFF;
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        .dropdown-item {
          color: #000;
          transition: 0.4s;

          &:hover {
            background-color: #999; /* Cor ao passar o mouse sobre o item do dropdown */
          }

    }
  }
`;
