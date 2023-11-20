import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Container,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../actions/auth";

export default function SignUP() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch("http://localhost:5000/user/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name:user.name,
  //       email: user.email,
  //       password: user.password,
  //     }),
  //   });
  //   // console.log(response.json());
  //   // console.log(response);
  //   const returnResponse = await response.json();
  //   // console.log(returnResponse);
  //  else {
  //     console.log("data saved in database");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    signup({ ...user }).then((data) => {
      // console.log(data.response);
      if (!data?.response) {
        navigate("/todo");
      } else {
        if (data.response.status === 404) {
          alert(data.response.data.errors[0].msg);
        } else if (data.response.status === 400) {
          alert(data.response.data);
        }
      }
    });
  };

  return (
    <Container maxW="50%">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired my="10px">
          <FormLabel>Name:</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="Enter the name..."
            onChange={handleChange}
            value={user.name}
          />
        </FormControl>
        <FormControl isRequired my="10px">
          <FormLabel>Email:</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter the Email"
            onChange={handleChange}
            value={user.email}
          />
        </FormControl>
        <FormControl isRequired my="10px">
          <FormLabel>PassWord:</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter the Password"
            onChange={handleChange}
            value={user.password}
          />
        </FormControl>

        <Button type="submit" my="20px" onSubmit={handleSubmit}>
          Submit
        </Button>
        <Link to="/auth/login">
          <Button ml="1em">Already a user</Button>
        </Link>
      </form>
    </Container>
  );
}
