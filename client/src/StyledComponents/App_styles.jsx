import React from 'react';

import styled from 'styled-components';




const Wrap = styled.div`
  width: 100vw;
  height: 155vh;


`

const PhotoGallery = styled.div`
  width: 100vw;
  height: 155vh;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 3.15fr 1fr;
  grid-template-rows: 4.1rem 5.3rem 54.3vh 1fr;
  grid-template-areas:
      "Nav Nav Nav"
      ". TitleInfo ."
      ". PhotoContent ."
      ". static .";

`

const Staticinfo = styled.div`
  grid-area: static;
  height: 100%;
  width: min(928px,100%);
  background-image: url("https://airbnb-photo-gallery.s3-us-west-1.amazonaws.com/Static+info.png");
  background-size: 100%;
  background-repeat: no-repeat;

`


export {Wrap, PhotoGallery, Staticinfo};