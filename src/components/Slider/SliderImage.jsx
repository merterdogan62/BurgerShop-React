import React, { memo } from "react";
import { Carousel } from "react-bootstrap";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default memo(function SliderImage({ img, title, description }) {
  return (
    <div>
      <img style={{ width: "100%" }} src={img} alt={description} />
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{description}</p>
        <Stack
          direction="row"
          className="d-flex align-items-center justify-content-center"
          spacing={2}>
          <Button
            className="p-3 mb-5 bg-white rounded shadow"
            size="medium"
            variant="outlined"
            href="/menu">
            Order Now
          </Button>
        </Stack>
      </Carousel.Caption>
    </div>
  );
});
