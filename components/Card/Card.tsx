import React from "react";
import { Box, Container } from "@mui/material";
import Carousel from "nuka-carousel";
import { ButtonLeft, ButtonRigth } from "./Card.styled";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Item from "../ItemCard/Item";
import data from "../../db.json";

const Card = () => {
  return (
    <Container maxWidth="md">
      <Carousel
        wrapAround={true}
        autoplay={false}
        autoplayInterval={5000}
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
        {data && data.map((item) => <Item key={item.id} {...item} />)}
      </Carousel>
    </Container>
  );
};

export default Card;
