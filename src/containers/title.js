import React from "react";
import styled from "styled-components";
import { theme, themeSecondary } from "../theme";

const TitleContainer = styled.div`
  width: 600px;
  height: 444px;
  /* margin-left: 109px; */
`;

const TextTitle = styled.p`
  width: 600px;
  height: 204px;
  /* left: 119px;
top: 190px; */
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 72px;
  letter-spacing: -0.02em;
  color: ${theme.primary};
`;

const DescriptionTitle = styled.p`
  margin-top: 36px;
  width: 560px;
  height: 96px;
  /* left: 119px;
top: 430px; */

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 160%;
  color: ${theme.primary};
`;



export default function Title(props) {
  return (
    <TitleContainer>
      <TextTitle>
        Imagine your <br /> home smart enough <br />{" "}
        <span style={{ color: themeSecondary.secondary }}>to take care</span> of
        itself.
      </TextTitle>
      <DescriptionTitle>
        Turn your home into a smarthome today with a simple & affordable
        upgrade. Discover the upgrade that automates home maintenance.
      </DescriptionTitle>
    </TitleContainer>
  );
}
