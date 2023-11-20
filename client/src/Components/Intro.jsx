import React from "react";
import { Box, Heading, Button, Text } from "@chakra-ui/react";
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Intro() {
  return (
    <Box mt="3em">
      <Text>
      <Box mt='20px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Heading textAlign="center">Welcome to your own TO-DO List</Heading>
         <Box mt='20px'>
         <Link to="/todo">   <Button  mr='20px'>My TO-DO</Button> </Link>
                    
                </Box>
                </Box>
      </Text>
    </Box>
  );
}
