import React from "react";
import Burger from "../../assets/burger.jpg";
import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <div className="container">
      <div className="about-top">
        <Box
          sx={{
            height: { xs: "100px", sm: "150px", md: "300px" },
            backgroundImage: `url(${Burger})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
          {/* <img src={Burger} alt="" /> */}
        </Box>
      </div>
      <div className="content">
        <h1>About Us</h1>
        <Typography
          sx={{ fontSize: { xs: "0.6rem", sm: "0.7rem", md: "1rem" } }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          debitis accusantium tempora, odio, tenetur nam ipsum aspernatur
          corrupti alias animi aut? Minima quis aliquam, neque quisquam natus
          ducimus minus harum! Harum quia incidunt asperiores sunt sapiente
          magni. Assumenda, corrupti. Ducimus maxime nobis minus recusandae
          vitae perspiciatis aliquid placeat omnis ea, nostrum, fuga est dolores
          aliquam officia impedit ab mollitia voluptas! Aliquam quasi,
          voluptatibus ullam non ipsa at doloribus fugit eveniet atque expedita
          accusamus illum totam quod facilis nobis itaque incidunt animi in
          unde. Officia alias laboriosam dignissimos doloribus nobis neque!
          Rerum, perferendis vel minima minus aliquam deserunt id consequuntur
          placeat repellat eaque sequi mollitia nisi ipsa dolores voluptate
          voluptates iure commodi ea corporis assumenda tenetur. Harum officia
          possimus nam eos! Repudiandae qui veniam dolore id saepe officia
          temporibus, consequatur numquam facilis animi voluptas error modi ea
          sit officiis maxime, quasi quae eveniet? Non aut pariatur cum corporis
          fugit fuga voluptas. Nihil nostrum porro facere tenetur ipsa? Possimus
          nisi molestias velit distinctio, repudiandae atque laborum fuga
          dolorem dignissimos soluta assumenda ipsum eum labore, perspiciatis
          autem esse deleniti quibusdam! Voluptatum, illum ex? Fuga recusandae
          natus, laboriosam exercitationem nobis magni dicta libero reiciendis,
          repellat hic obcaecati repudiandae eveniet accusantium. Ullam nisi
          similique voluptatum in facere delectus saepe ipsam eos! Obcaecati
          itaque ab eum. A, adipisci. Quaerat ab quasi eligendi, cum provident
          nobis eveniet. Ea praesentium quis rerum vel? Maiores unde, iusto
          soluta quas facere ut sed sit aut vitae eos nesciunt mollitia omnis.
        </Typography>
      </div>
    </div>
  );
}
