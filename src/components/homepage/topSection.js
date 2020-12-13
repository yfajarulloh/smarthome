import React from "react";
import styled from "styled-components";
import backgroundImg from "../../assets/images/hero-imagessss.png";
import logo from "../../assets/images/logo.png";
import Logo from "../../containers/logo";
import Title from "../../containers/title";
import Button from "../buttonPrimary";
import { Marginer } from "../margin";

const TopContainer = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  padding: 0;
  width: 100%;
  height: 100vh;
  padding-inline-start: 119px;
`;

export function TopSection(props) {
  return (
    <TopContainer>
      <Marginer direction="vertical" margin="36px" />
      <div className="navbar">
      <Logo/>
        {/* <div> */}
        {/* <img src={logo} alt=""/> */}
          <ul className="left">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Cotact</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a href="#">Sign</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        {/* </div> */}
      </div>
      <Marginer direction="vertical" margin="76px" />
      <Title />
      <Button white>Started</Button>
      <Button>Learn More</Button>
    </TopContainer>
  );
}
