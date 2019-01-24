import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import circleLogo from "../images/pattern_teal.png";
import dapLogo from "../images/dap_logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import din from "../fonts/din_alternate.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: DinAlternate;
    src: url(${din});
  }
`;

const Container = styled.div`
  padding-top: 70px;
`;

const H2 = styled.h2`
  font-family: DinAlternate;
  text-align: center;
  margin-top: 10px;
`;

const CircleLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 80%;
  max-width: 300px;
`;

const DapLogo = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  width: 90%;
  max-width: 700px;
`;

const SocialLinks = styled.div`
  display: block;
  width: 120px;
  margin: 0 auto;
`;

const SocialLink = styled.a`
  &:first-child {
    margin-right: 20px;
  }
`;

const SocialImage = styled.img`
  width: 50px;
  height: auto;
`;

export default () => (
  <div>
    <GlobalStyle />
    <Container>
      <CircleLogo src={circleLogo} />
      <DapLogo src={dapLogo} />
      <H2>Site under construction</H2>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com/dorchesterartproject/">
          <SocialImage src={facebook} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/dorchesterartproject/">
          <SocialImage src={instagram} />
        </SocialLink>
      </SocialLinks>
    </Container>
  </div>
);
