import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Hero } from "model";
import React from "react";
import HeroItem from "./HeroItem";

interface Prop {
  heroes: Hero[];
}

export default function HeroList({ heroes }: Prop) {
  const TextHeader = ({ children, ...props }) => (
    <Text textAlign="left" w="full" {...props} color="#8E8E8E" fontSize="12">
      {children}
    </Text>
  );
  return (
    <Flex direction="column">
      <Flex justify="space-between" px={5}>
        <TextHeader>Personagem</TextHeader>
        <TextHeader>Séries</TextHeader>
        <TextHeader>Eventos</TextHeader>
      </Flex>

      {heroes.map((hero) => (
        <HeroItem key={hero.id} hero={hero} />
      ))}
    </Flex>
  );
}
