import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ checked }) => css`
    height: 52px;
    width: 52px;

    border: 1px solid black;
    border-radius: 5px;

    cursor: pointer;

    background-color: #ffffff;

    transition: 0.2s;

    ${checked &&
    css`
      background-color: #43ae60;
    `}

    ${!checked &&
    css`
      &:hover {
        background-color: #43ae5f9d;
      }
    `}
  `}
`;
