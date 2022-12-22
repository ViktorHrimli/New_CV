import React from "react";
import { Box, Container } from "@mui/material";
import Carousel from "nuka-carousel";
import { ButtonLeft, ButtonRigth } from "./Card.styled";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Item from "../ItemCard/Item";
import data from "../../db.json";

const Card = () => {
  return (
    <Carousel
      wrapAround={true}
      autoplay={false}
      autoplayInterval={5000}
      slidesToShow={1}
      pauseOnHover={true}
      speed={1000}
      animation="zoom"
      renderCenterLeftControls={({ nextDisabled, nextSlide }) => (
        <ButtonLeft onClick={nextSlide} disabled={nextDisabled}>
          <AiOutlineArrowRight fill="white" size={20} />
        </ButtonLeft>
      )}
      renderCenterRightControls={({ previousDisabled, previousSlide }) => (
        <ButtonRigth onClick={previousSlide} disabled={previousDisabled}>
          <AiOutlineArrowLeft fill="white" size={20} />
        </ButtonRigth>
      )}
    >
      {data && data.map((item) => <Item key={item.id} {...item} />)}
    </Carousel>
  );
};

export default Card;
