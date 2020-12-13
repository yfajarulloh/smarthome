import React from "react";
import styled from "styled-components";
import { theme, themeSecondary } from "../../theme";

const ButtonContainer = styled.button`
  padding: 13px 21.5px;
  border: ${({ white }) => (white ? "none" : "1px solid #ffffff")};
  width: 128px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${"#ffffff"};
  background-color: ${({white}) => (white? "#1ECE7A" : "transparent")};
  border-radius: 7px;
  margin-left: ${({white}) => (white? "0px" : "16px")};
  padding: 15px;
  text-decoration: none;
  display: inline;
  transition: all 220ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ white }) => (white ? "transparent" : "#1ECE7A")};
    border:${({ white }) => (white ? "1.2px solid #1ece7a" : "1px solid #ffffff")}; ;
  }
`;

export default function Button(props) {
  return<ButtonContainer {...props}>
    {props.children}
  </ButtonContainer>
  ;
}
