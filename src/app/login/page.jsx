"use client";
import React, { useState } from "react";
import { validate } from "react-email-validator";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { handlePost } from "@/lib/api";
import { setAuthToken } from "@/lib/setAuthToken";
import {
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Grid,
  GridItem,
  Box,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const userLogin = () => {
    const emailType = validate(inputValue.email);
    if (inputValue.email === "" || inputValue.password === "") {
      setEmailError({
        ...emailError,
        error: !emailError,
        text: "Email is required",
      });
      setPasswordError({
        ...passwordError,
        error: !passwordError,
        text: "Email is required",
      });
    } else if (!emailType) {
      setEmailError({
        ...emailError,
        error: !emailError,
        text: "Email is invalid",
      });
    } else {
      handlePost(
        "/login",
        inputValue,
        (res) => {
          localStorage.setItem("jwtToken", res.data), setAuthToken();
        },
        (err) => {
          const msg = err.response.data.msg;
          console.log(msg);

          if (msg === "email") {
            setEmailError({
              ...emailError,
              error: !emailError,
              text: "Email does not exist",
            });
          }
          if (msg === "password") {
            setEmailError({
              ...passwordError,
              error: !passwordError,
              text: "Password is Wrong",
            });
          }
        }
      );
    }
  };

  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" />
        <GridItem w="100%">
          <Card mt={20} w="80%">
            <CardHeader>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Heading size="xl" justifyContent="center">
                  Sign in
                </Heading>
              </Box>
            </CardHeader>

            <CardBody>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Stack w="80%">
                  <FormControl isInvalid={emailError.error}>
                    <Input
                      variant="outline"
                      placeholder="Enter email"
                      onChange={(e) =>
                        setInputValue({ ...inputValue, email: e.target.value })
                      }
                    />

                    <FormErrorMessage>{emailError.text}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={passwordError.error}>
                    <InputGroup size="md" mt={7}>
                      <Input
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            password: e.target.value,
                          })
                        }
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{passwordError.text}</FormErrorMessage>
                  </FormControl>
                </Stack>
              </Box>
            </CardBody>

            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              py={12}
              mb={2}
            >
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="teal"
                variant="outline"
                onClick={userLogin}
              >
                Sign in
              </Button>
            </Box>
          </Card>
        </GridItem>
        <GridItem w="100%" />
      </Grid>
    </>
  );
};
export default Login;
