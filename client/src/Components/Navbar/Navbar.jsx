import React, { useEffect, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../actions/auth";

export default function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("Profile"));

  useEffect(() => {
    if (currentUser) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [currentUser]);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <Box
      position="fixed"
      w="100%"
      h="60px"
      bg="#181823"
      p="20px"
      display="flex"
      justifyContent="space-between"
      zIndex="2"
      alignItems="center"
    >
      <Heading as="h4" color="white">
      <Link to="/">
        ToDo</Link>
      </Heading>
      <Box>
        {!isLoggedIn ? (
          <Link to="/auth">
            <Button>Login/Signup</Button>
          </Link>
        ) : (
          <Button onClick={handleLogout}>Logout</Button>
        )}
      </Box>
    </Box>
  );
}
