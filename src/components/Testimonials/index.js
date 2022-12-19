import React from "react";
import annika from "../../images/annika1.jpg";
import filler from "../../images/filler.png"
import {
  TestimonialsContainer,
  TestimonialsHeader,
  TestimonialsWrapper,
  Testimonial,
  TestimonialHeader,
  TestimonialDate,
  TestimonialP,
  TestimonialProfile,
  ProfilePic,
  ProfileWrapper,
  NameDate,
} from "./TestimonialsElements";

const Testimonials = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsHeader> Testimonials</TestimonialsHeader>
      <TestimonialsWrapper>
        <Testimonial>
          <ProfileWrapper>
            <TestimonialProfile>
              <ProfilePic src={annika} alt="Annika" />
            </TestimonialProfile>
            <NameDate>
              <TestimonialHeader>Annika Dalland</TestimonialHeader>
              <TestimonialDate>11/11/2021</TestimonialDate>
            </NameDate>
          </ProfileWrapper>
          <TestimonialP>
            The site Erik created for me was very well done.
          </TestimonialP>
        </Testimonial>
        <Testimonial><ProfileWrapper>
            <TestimonialProfile>
              <ProfilePic src={filler} alt="filler" />
            </TestimonialProfile>
            <NameDate>
              <TestimonialHeader>Happy Customer</TestimonialHeader>
              <TestimonialDate>11/11/2021</TestimonialDate>
            </NameDate>
          </ProfileWrapper>
          <TestimonialP>
            Coming Soon.
          </TestimonialP></Testimonial>
        <Testimonial><ProfileWrapper>
            <TestimonialProfile>
              <ProfilePic src={filler} alt="filler" />
            </TestimonialProfile>
            <NameDate>
              <TestimonialHeader>Happy Customer</TestimonialHeader>
              <TestimonialDate>11/11/2021</TestimonialDate>
            </NameDate>
          </ProfileWrapper>
          <TestimonialP>
            Coming Soon.
          </TestimonialP></Testimonial>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
};

export default Testimonials;
