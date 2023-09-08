import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import { sliderData } from "../../data/SliderData";
import SliderImage from "./SliderImage";

export default function Slider() {
  return (
    <>
      <Carousel>
        {sliderData.map((item) => {
          return (
            <Carousel.Item>
              <SliderImage
                key={item.id}
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
}
