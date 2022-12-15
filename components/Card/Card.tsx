import React from "react";
import { Box, Container } from "@mui/material";
import Carousel from "nuka-carousel";
import Item from "../ItemCard/Item";
type Props = {};

const Card = (props: Props) => {
  return (
    <Container maxWidth="md">
      <Carousel
        wrapAround={true}
        autoplay={false}
        slidesToShow={1}
        pauseOnHover={true}
        animation="zoom"
        renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
          <button onClick={previousSlide} disabled={previousDisabled}>
            Previous
          </button>
        )}
        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
          <button onClick={nextSlide} disabled={nextDisabled}>
            Next
          </button>
        )}
      >
        <Item />
      </Carousel>
    </Container>
  );
};

export default Card;
