import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
      component="footer">
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          <div>All rights reserved </div>
          <div>
            <Link color="inherit" target="_blanks" href="https://facebook.com/">
              <FacebookIcon />
            </Link>
            <Link
              color="inherit"
              target="_blanks"
              href="https://instagram.com/">
              <InstagramIcon />
            </Link>{" "}
            <Link color="inherit" target="_blanks" href="https://linkedin.com/">
              <LinkedInIcon />
            </Link>
          </div>
          <div>Created By Mert ERDOGAN </div>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
