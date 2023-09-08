import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Link from "@mui/material/Link";
import {
  Address,
  Contact as contact,
  SocialMediaLinks,
  ShopCoordinate,
} from "../../data/ContactData";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BurgerLogo from "../../assets/burger-logo.svg";
import SendIcon from "@mui/icons-material/Send";
import "./style.css";

export default function Contact() {
  const shopLocationString =
    "http://maps.google.com/maps?q=" +
    ShopCoordinate.latitute +
    "," +
    ShopCoordinate.longtitute +
    "&output=embed";

  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          marginTop: "5px",
        }}
        className="top-area">
        <Box
          sx={{
            backgroundImage: `url(${BurgerLogo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: { xs: "100%", md: "100%" },
            height: { xs: "300px" },
          }}
          className="image-area "
        />

        <Box
          sx={{
            width: { xs: "100%", md: "60%" },
            margin: { xs: "5px 0 0 0", sm: "5px 0 0 0", md: "0 0 0 5px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
          className="form-area">
          <TextField
            name="name"
            className="mt-2"
            label="Name"
            variant="standard"
          />
          <TextField
            name="email"
            className="mt-2"
            label="E-Mail"
            variant="standard"
          />
          <TextField
            name="message"
            className="mt-2"
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={5}
          />
          <Button
            className="mt-auto"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ marginTop: { xs: "5px !important" } }}>
            Send Message
          </Button>
        </Box>
      </Box>
      <hr />

      <div className="contact-area">
        <div className="address">
          <h3 className="title">Address</h3>
          <p className="detail">{Address.address}</p>
        </div>
        <div className="contact">
          <h3 className="title">Contact</h3>
          <p className="phone detail">Tel: {contact.Tel}</p>
          <p className="fax detail"> Fax: {contact.Fax}</p>
          <p className="email detail">Mail: {contact.Mail}</p>

          <div className="social-media">
            <Link
              color="inherit"
              target="_blanks"
              href={SocialMediaLinks.facebook}>
              <FacebookIcon />
            </Link>{" "}
            <Link
              color="inherit"
              target="_blanks"
              href={SocialMediaLinks.instagram}>
              <InstagramIcon />
            </Link>{" "}
            <Link
              color="inherit"
              target="_blanks"
              href={SocialMediaLinks.linkedin}>
              <LinkedInIcon />
            </Link>{" "}
          </div>
        </div>
        <div className="opening-hours">
          <h3 className="title">Opening Hours</h3>
          <p className="detail">Monday - Friday: 9AM - 5PM</p>
        </div>
      </div>
      <hr />
      <div className="map-area">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title="Burger Shop"
              src={shopLocationString}
              width="100%"
              height="500px"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
