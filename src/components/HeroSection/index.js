import React, {useState} from "react";
import Video from "../../video/video.mp4";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
       setHover(!hover) 
    }


  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to My Portfolio</HeroH1>
        <HeroP>Scroll down to see more.</HeroP>
        <Button to="contact" onMouseEnter={onHover}
        onMouseLeave={onHover}
        primary="true"
        dark = "true"
        >
          Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
