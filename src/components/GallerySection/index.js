import React from "react";
import icon1 from '../../images/annika1.jpg'
import icon2 from '../../images/p5jsgame.png'
import { Button } from "react-scroll";
import {
  GalleryContainer,
  GalleryH1,
  GalleryWrapper,
  GalleryProject,
  GalleryProject2,
  GalleryProject3,
  GalleryOverlay,
  GalleryIcon,
  GalleryH2,
  GalleryP,
  Anchor
} from "./GalleryElements";

const Gallery = () => {
  return (
    <GalleryContainer id="projects">
      <GalleryH1>My Projects</GalleryH1>
      <GalleryWrapper>
      <Anchor href="https://eldalland.itch.io/dungeon-dweller" target="_blank">
        <GalleryProject>
          <GalleryOverlay>
          <GalleryH2>P5js Game</GalleryH2>
          <GalleryP>Dungeon Dweller</GalleryP>
          </GalleryOverlay>
        </GalleryProject>
        </Anchor>
        <Anchor href="https://eldalland.itch.io/egg-bounce" target="_blank">
        <GalleryProject2>
          <GalleryOverlay>
          <GalleryH2>Unity Game</GalleryH2>
          <GalleryP>Egg Bounce</GalleryP>
          </GalleryOverlay>
        </GalleryProject2>
        </Anchor>
        <Anchor href="" target="_blank">
        <GalleryProject3>
          <GalleryOverlay>
          <GalleryH2>Coming Soon</GalleryH2>
          <GalleryP>Project</GalleryP>
          </GalleryOverlay>
        </GalleryProject3>
        </Anchor>
        
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
