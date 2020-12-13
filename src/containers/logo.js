import React from "react";
import styled from "styled-components";
import logo from "../../src/assets/images/shape.png";
import { theme } from "../theme";

const LogoContainer = styled.div`
  /* width: 167px; */
  height: 42px;
  /* display: flex; */
  flex-direction: row;
  float:left;
  /* display: inline; */
  `;

const LogoImg = styled.img`
  /* width: 42px; */
  float: left;
  /* margin-left:119px; */
`;

const LogoText = styled.div`
  font-family: Inter;
  padding-top: 9px;
  padding-left:12px;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: ${theme.primary};
  /* margin-top:45px; */
`;

export default function Logo(props) {
  return (
    <LogoContainer>
      <LogoImg src={logo} />
      <LogoText>Siphome</LogoText>
    </LogoContainer>
  );
}
