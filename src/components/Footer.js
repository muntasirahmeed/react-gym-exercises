import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
    <Box mt="80px" borderTop={"3px solid #FF2625"} borderRadius='50%' >
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h6"
      sx={{ fontSize: { lg: "16px", xs: "20px" } }}
      mt="20px"
      textAlign="center"
      pb="40px"
    >
      Copyright by © <span style={{ color: "#FF2625" }}>Muntasir Ahmed</span>
    </Typography>
  </Box>
);

export default Footer;
