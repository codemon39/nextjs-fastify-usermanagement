import React, { useEffect, useReducer, useState } from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { handleGet } from "@/lib/api";
import { userRemove } from "@/lib/utils";
import {
  IconButton,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Tr,
  Thead,
  Text,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [refresh, toggleRefresh] = useReducer((toggle) => !toggle, false);

  useEffect(() => {
    handleGet("/devs", (res) => setUserData(res.data));
  }, [refresh]);

  const handleRemove = (id) => {
    userRemove(id);
    toggleRefresh();
  };

  return (
    <>
      <Center>
        <Text mt={10} fontSize="3xl" fontWeight="bold">
          User Lists
        </Text>
      </Center>
      <Center>
        <Table w="80%" my={10}>
          <Thead>
            <Tr>
              <Th>NAME</Th>
              <Th>GENDER</Th>
              <Th>BIRTHDAY</Th>
              <Th>ADDRESS</Th>
              <Th>DELETE</Th>
              <Th>EDIT</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData.map((users, index) => (
              <Tr key={users._id}>
                <Td>{users.name}</Td>
                <Td>{users.gender}</Td>
                <Td>{users.birthday}</Td>
                <Td>{users.address}</Td>
                <Td>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Call Sage"
                    fontSize="20px"
                    icon={
                      <DeleteIcon onClick={() => handleRemove(users._id)} />
                    }
                  />
                </Td>
                <Td>
                  <Link href={`/dev/${users._id}`}>
                    <IconButton
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<EditIcon />}
                    />
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </Center>
    </>
  );
};

export default UserTable;
