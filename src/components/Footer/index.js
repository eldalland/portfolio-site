import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  Footerh2,
  Linkedin,
  Github,
  Anchor
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Me</FooterLinkTitle>
              <Footerh2>eldalland@gmail.com</Footerh2>
              <Footerh2>erik.dalland38@myhunter.cuny.edu</Footerh2>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Connect With Me</FooterLinkTitle>
              <Anchor href='https://www.linkedin.com/in/erik-dalland-203a31172/'>
              <Footerh2><Linkedin /></Footerh2>
              </Anchor>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Github</FooterLinkTitle>
              <Anchor href='https://github.com/eldalland/Erik-Dalland/blob/main/README.md'>
              <Footerh2><Github /></Footerh2>
              </Anchor>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
