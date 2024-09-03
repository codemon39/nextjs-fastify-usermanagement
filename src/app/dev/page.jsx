"use client";

import UserTable from "./userTable.jsx";
import React from "react";
import { Center, Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { AddIcon, UnlockIcon } from "@chakra-ui/icons";

const Usermanage = () => {
  return (
    <>
      <Button m={30} colorScheme="blue" variant="outline">
        Sign out
        <UnlockIcon ml={2} />
      </Button>
      <UserTable />
      <Center>
        <Link mt={10} href="/dev/new">
          <Button colorScheme="blue" variant="outline">
            Add User
          </Button>
        </Link>
      </Center>
    </>
  );
};

export default Usermanage;
