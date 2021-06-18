import { Center, CircularProgress, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import useFetch from "../hooks/useFetch";
import { useUtilsBreakpoint } from "../hooks/useBreakpoint";
import HeroItem from "./HeroItem";

export default function HeroList() {
  const { data: heroes, loading } = useFetch();

  const { isBigScreen } = useUtilsBreakpoint();

  const TextHeader = ({ children, ...props }) => (
    <Text textAlign="left" w="full" {...props} color="#8E8E8E" fontSize="12">
      {children}
    </Text>
  );
  return (
    <Flex direction="column" h="full">
      <Flex justify="space-between" px={5}>
        <TextHeader>Personagem</TextHeader>
        {isBigScreen && (
          <>
            <TextHeader>Séries</TextHeader>
            <TextHeader>Eventos</TextHeader>
          </>
        )}
      </Flex>

      {loading ? (
        <Center h="full">
          Carregando...
          <CircularProgress mx={2} isIndeterminate></CircularProgress>
        </Center>
      ) : heroes.length == 0 ? (
        <Text>Nenhum personagem encontrado</Text>
      ) : (
        heroes.map((hero) => <HeroItem key={hero.id} hero={hero} />)
      )}
    </Flex>
  );
}
