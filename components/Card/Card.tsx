import React from "react";
import { Box, Container } from "@mui/material";
import Carousel from "nuka-carousel";
import { ButtonLeft, ButtonRigth } from "./Card.styled";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
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
          <ButtonLeft onClick={previousSlide} disabled={previousDisabled}>
            <AiOutlineArrowRight fill="white" size={20} />
          </ButtonLeft>
        )}
        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
          <ButtonRigth onClick={nextSlide} disabled={nextDisabled}>
            <AiOutlineArrowLeft fill="white" size={20} />
          </ButtonRigth>
        )}
      >
        <Item />
        <Item />
      </Carousel>
    </Container>
  );
};

export default Card;
