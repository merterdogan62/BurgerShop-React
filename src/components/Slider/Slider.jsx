import React, { memo } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import { sliderData } from "../../data/SliderData";
import SliderImage from "./SliderImage";

export default memo(function Slider() {
  return (
    <>
      <Carousel id="slider">
        {sliderData.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <SliderImage
                img={item.url}
                title={item.title}
                description={item.description}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
});
