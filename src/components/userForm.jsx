"use client";
import React, { useEffect, useState } from "react";
import { addUser } from "@/lib/utils";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function UserForm({ data, handleSubmit }) {
  const [inputValue, setInputValue] = useState(data);
  useEffect(() => {
    setInputValue(data);
  }, [data]);
  return (
    <>
      <Container centerContent mt={100}>
        <Text mb={10} fontWeight="bold" fontSize="3xl"></Text>
        <FormControl>
          <FormLabel>Full name</FormLabel>
          <Input
            value={inputValue?.name || ""}
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
            placeholder="Full name"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Gender</FormLabel>
          <Select
            value={inputValue?.gender || ""}
            onChange={(e) =>
              setInputValue({ ...inputValue, gender: e.target.value })
            }
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Birthday</FormLabel>
          <Input
            value={inputValue?.birthday || ""}
            onChange={(e) =>
              setInputValue({ ...inputValue, birthday: e.target.value })
            }
            type="date"
          ></Input>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Location</FormLabel>
          <Input
            value={inputValue?.address || ""}
            onChange={(e) =>
              setInputValue({ ...inputValue, address: e.target.value })
            }
            placeholder="Loacation"
          />
        </FormControl>
        <Button
          mb={5}
          onClick={() => handleSubmit(inputValue)}
          w={300}
          mt={10}
          colorScheme="blue"
        >
          Submit
        </Button>
        <Link href="/dev">
          <Button w={300} colorScheme="blue">
            Back
          </Button>
        </Link>
      </Container>
    </>
  );
}
