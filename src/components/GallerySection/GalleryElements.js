import styled from "styled-components";
import img1 from '../../images/Title8.png';
import img2 from '../../images/TitlePage6.png';
export const GalleryContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;
-webkit-perspective:1;

`

export const GalleryWrapper = styled.div`
max-width: 1000px;
height: 600px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
grid-gap: 30px;


@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    height: 800px;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    height: 1200px;
}
`
export const GalleryProject = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 0px;
max-height: 340px;
padding: 30px;
height: 340px;
width: 250px;
background-image: url(${img1});
background-size: 320px 500px;
background-position:center top;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;


&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const GalleryProject2 = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 0px;
height: 340px;
width: 250px;
max-height: 340px;
padding: 30px;
background-image: url(${img2});
background-size: 410px 340px;
background-position: top left;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;


&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const GalleryProject3 = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 0px;
max-height: 340px;
padding: 30px;
height: 340px;
width: 250px;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
//background-image: url(${img2});


&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const GalleryIcon = styled.img`
height: 225px;
width: 225px;
margin-bottom: 10px;
`

export const GalleryH1 = styled.h1`
font-size: 2.5rem;
color: #000;
margin-top: 150px;
margin-bottom: 64px;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const GalleryH2 = styled.h2`
font-size:1rem;
margin-bottom: 4px;
margin-top: 8px;
text-align: center;
color: #fff;
`

export const GalleryP = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`

export const GalleryOverlay =styled.div`
width: 150px;
height: 60px;
border-radius: 0px;
margin-top: auto;
background-color: #000;
box-shadow: 0 2px 6px rgba(0,0,0,0.2);
`

export const Anchor = styled.a`
text-decoration: none;
color: #000;
`