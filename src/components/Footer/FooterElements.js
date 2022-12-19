import styled from "styled-components";
import {Link} from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";


export const FooterContainer = styled.footer`
background-color: #101522;

`
export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
display:flex;
justify-content: center;

@media screen and (max-width: 820px) {
    padding-top: 32px;
}
`

export const FooterLinksWrapper = styled.div`
display:flex;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 16px;
text-align: left;
width: 310px;
box-sizing: border-box;
color: #fff

@media and screen (max-width: 420px) {
    margin:0;
    padding: 10px;
    width: 100%
}
`

export const FooterLinkTitle = styled.h1`
font-size: 16px;
color:#fff;
margin-bottom: 16px;
`

export const Footerh2=styled.h2`
color:#fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
`

export const Linkedin = styled(FaLinkedin)`
font-size: 30px;

&:hover{
    color: #01bf71;
    transition: 0.3s ease-out;
}
` 
export const Github = styled(FaGithub)`
font-size: 30px;
&:hover{
    color: #01bf71;
    transition: 0.3s ease-out;
}
`    
export const Anchor = styled.a`
text-decoration: none;
color: #000;
`