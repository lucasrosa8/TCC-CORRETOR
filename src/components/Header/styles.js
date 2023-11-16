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
    
    

    li {
      padding: 10px 20px;
      

      cursor: pointer;
      transition: 0.4s;

      a {
        color: #fff;
        font-size: 16px;
        font-family: "Poppins";
      }

      &:hover {
        background-color: #c16c21;
      }
    }
  }
`;
