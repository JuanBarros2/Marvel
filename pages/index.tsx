import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Header, Pagination, HeroList, QueryInput } from "../components";

export default function Page() {
  return (
    <Flex h="100vh" direction="column">
      <Header />
      <Box bgColor="#E5E5E5" overflowY="scroll" h="full">
        <Container maxW="1140px">
          <QueryInput />
          <HeroList />
        </Container>
      </Box>
      <Pagination />
    </Flex>
  );
}
