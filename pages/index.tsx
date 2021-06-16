import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Header, Pagination, HeroList, QueryInput } from "../components";

export default function Page() {
  return (
    <Box>
      <Header />
      <Box bgColor="#E5E5E5" overflowY="scroll" h="82vh">
        <Container maxW="1140px">
          <QueryInput />
          <HeroList />
        </Container>
      </Box>
      <Pagination />
    </Box>
  );
}
