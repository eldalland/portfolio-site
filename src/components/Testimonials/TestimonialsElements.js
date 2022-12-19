import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  color: #fff;
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-perspective: 1;
`;

export const TestimonialsWrapper = styled.div`
  display: grid;
  height: 500px;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  column-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;

  
@media screen and (max-width: 1300px){
    grid-template-columns: 1fr 1fr;   
}
  @media screen and (max-width: 1000px) {
    height: fit-to-content;
    display: grid;
    column-gap: 2rem;
    justify-content: center;
    place-items: center;
    grid-template-columns: 1fr;
 
  }
`;

export const Testimonial = styled.div`
  background-color: #fff;
  width: 400px;
  height: fit-content;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
      width: 350px;

  }
`;

export const TestimonialProfile = styled.div`
max-width: 60px;
height: 60px;
overflow: hidden;
border-radius: 50%;

@media screen and (max-width: 1000px) {
    max-width: 50px;
height: 50px;
}
`
export const ProfilePic = styled.img`
width: 100%;
height: auto;
`

export const TestimonialsHeader = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-top:150px;
  margin-bottom: 64px;
  margin-left: 10px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;


export const ProfileWrapper =  styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`
export const TestimonialHeader = styled.h2`
font-weight: bold;
font-size: 20px;
color: #01bf71;
margin-top: 10px;
width: 200px;
height: 25px;

@media and screen (max-width: 1000px) {
    font-size: 18px;
}
`
export const NameDate = styled.div`
grid-column: 2/3;
`
export const TestimonialDate = styled.h3`
font-size: 14px;
color: gray;
`

export const TestimonialP = styled.p`
font-size:16px;
color: #000;
margin-top: 20px;
padding-left: 10px;
 text-align: left;
 margin-bottom: 20px;
`