import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useUtilsBreakpoint } from "../hooks/useBreakpoint";
import { useQuery } from "../providers/QueryProvider";

export default function QueryInput() {
  const { isBigScreen } = useUtilsBreakpoint();
  const [query, setQuery] = useQuery();
  return (
    <Box>
      <Flex direction="column" alignItems={isBigScreen ? "start" : "center"}>
        <Text fontWeight="bold" as="h1" fontSize={32} mb={4} mt={10}>
          Busca de personagens
        </Text>
        <Text fontWeight="bold" as="h2" mb={2}>
          Nome do personagem
        </Text>
      </Flex>

      <InputGroup width={isBigScreen ? "295px" : "full"} mb={10}>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          bgColor="white"
          placeholder="Search"
          value={query}
          width="full"
          onChange={(e) => setQuery(e.target.value)}
        ></Input>
      </InputGroup>
    </Box>
  );
}
