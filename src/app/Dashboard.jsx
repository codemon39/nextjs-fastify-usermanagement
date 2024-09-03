import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Text, Link, Container, Box } from "@chakra-ui/react";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <Container centerContent mt="10%">
        <Text fontSize="6xl" fontWeight="bold" letterSpacing={5}>
          Welcome!
        </Text>
        <Box mt={50}>
          <Link href="/login">
            <Button colorScheme="blue" fontSize="xl" w={200}>
              Login
              <ArrowForwardIcon ml={2} />
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
