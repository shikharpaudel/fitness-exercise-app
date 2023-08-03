import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/assets/images/Logo.png";

const Home = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "20px", xs: "32px" },justifyContent:'none', }} px="20px" 
    >
      <img
        src={Logo}
        alt="Logo"
        style={{ width: "48px", height: "48px", margin: "0 20px" }}
      />
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Home;
