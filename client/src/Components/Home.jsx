import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box pt="20px">
        <Outlet />
      </Box>
    </Box>
  );
}
