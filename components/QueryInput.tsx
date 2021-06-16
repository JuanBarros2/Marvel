import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "../providers/QueryProvider";

export default function QueryInput() {
  const [query, setQuery] = useQuery();
  return (
    <Box>
      <Text fontWeight="bold" as="h1" fontSize={32} mb={4} mt={10}>
        Busca de personagens
      </Text>
      <Text fontWeight="bold" as="h2">
        Nome do personagem
      </Text>

      <InputGroup w="295px" mb={10}>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          bgColor="white"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
      </InputGroup>
    </Box>
  );
}
