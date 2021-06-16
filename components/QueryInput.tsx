import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function QueryInput() {
  return (
    <Box>
      <Text fontWeight="bold" as="h1" fontSize={32}>
        Busca de personagens
      </Text>
      <Text fontWeight="bold" as="h2">
        Nome do personagem
      </Text>

      <InputGroup w="295px">
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input bgColor="white" placeholder="Search"></Input>
      </InputGroup>
    </Box>
  );
}
